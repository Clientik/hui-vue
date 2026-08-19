import type { CodemodPlugin } from 'vue-metamorph'
import type { TransformOpts } from '.'

// Per-style class rewrites. HUI ships a single style and the registry already
// serves components in it, so nothing is rewritten on the way in — the map is
// kept because a future second style would slot in here.
const STYLE_CLASS_MAPPINGS: Record<string, Record<string, string>> = {}

/**
 * Apply class mappings to a string of CSS classes.
 * Uses word boundary matching to avoid partial replacements.
 */
function applyClassMappings(value: string, classMapping: Record<string, string>): string {
  let result = value
  for (const [from, to] of Object.entries(classMapping)) {
    const regex = new RegExp(`\\b${from}\\b`, 'g')
    result = result.replace(regex, to)
  }
  return result
}

/**
 * Transform component classes based on the selected visual style.
 * Handles:
 * - Static class attributes in templates (class="...")
 * - Dynamic class bindings in templates (:class="cn(...)")
 * - String literals in script (CVA variants, inline classes)
 *
 * With a single style there is nothing to rewrite, so this is a pass-through.
 */
export function transformStyle(opts: TransformOpts): CodemodPlugin {
  return {
    type: 'codemod',
    name: 'transform-style',

    transform({ scriptASTs, sfcAST, utils: { traverseScriptAST, traverseTemplateAST } }) {
      let transformCount = 0
      const { config } = opts

      const style = config.style?.split('-')[0] ?? ''

      const classMapping = STYLE_CLASS_MAPPINGS[style]
      if (!classMapping) {
        return transformCount
      }

      // --- Transform script blocks (handles CVA variants, inline strings) ---
      for (const scriptAST of scriptASTs) {
        traverseScriptAST(scriptAST, {
          visitLiteral(path) {
            // Skip import declarations
            if (path.parent.value.type === 'ImportDeclaration') {
              return this.traverse(path)
            }

            if (typeof path.node.value === 'string') {
              const originalValue = path.node.value
              const newValue = applyClassMappings(originalValue, classMapping)
              if (newValue !== originalValue) {
                path.node.value = newValue
                transformCount++
              }
            }
            return this.traverse(path)
          },
          visitTemplateLiteral(path) {
            for (const quasi of path.node.quasis) {
              if (quasi.value.raw) {
                const originalValue = quasi.value.raw
                const newValue = applyClassMappings(originalValue, classMapping)
                if (newValue !== originalValue) {
                  quasi.value.raw = newValue
                  quasi.value.cooked = newValue
                  transformCount++
                }
              }
            }
            return this.traverse(path)
          },
        })
      }

      // --- Transform template blocks ---
      if (sfcAST) {
        traverseTemplateAST(sfcAST, {
          enterNode(node) {
            if (node.type !== 'VElement' || !node.startTag?.attributes) {
              return
            }

            for (const attr of node.startTag.attributes) {
              // Handle static class attribute: class="..."
              if (
                attr.type === 'VAttribute'
                && attr.key.type === 'VIdentifier'
                && attr.key.name === 'class'
                && attr.value
                && 'value' in attr.value
                && typeof attr.value.value === 'string'
              ) {
                const originalValue = attr.value.value
                const newValue = applyClassMappings(originalValue, classMapping)
                if (newValue !== originalValue) {
                  (attr.value as { value: string }).value = newValue
                  transformCount++
                }
              }

              // Handle dynamic class binding: :class="..." or v-bind:class="..."
              if (
                attr.type === 'VAttribute'
                && attr.key.type === 'VDirectiveKey'
                && attr.key.argument?.type === 'VIdentifier'
                && attr.key.argument.name === 'class'
                && attr.value?.type === 'VExpressionContainer'
                && attr.value.expression
              ) {
                transformExpression(attr.value.expression, classMapping, (count) => {
                  transformCount += count
                })
              }
            }
          },
        })
      }

      return transformCount
    },
  }
}

/**
 * Recursively traverse a Vue expression AST node to find and transform
 * string literals that contain CSS classes.
 */
function transformExpression(
  node: any,
  classMapping: Record<string, string>,
  onTransform: (count: number) => void,
) {
  if (!node)
    return

  // String literal: 'rounded-md bg-primary ...'
  if (node.type === 'Literal' && typeof node.value === 'string') {
    const originalValue = node.value
    const newValue = applyClassMappings(originalValue, classMapping)
    if (newValue !== originalValue) {
      node.value = newValue
      if (node.raw) {
        // Preserve quote style
        const quote = node.raw[0]
        node.raw = `${quote}${newValue}${quote}`
      }
      onTransform(1)
    }
    return
  }

  // Template literal: `rounded-md ${var}`
  if (node.type === 'TemplateLiteral' && node.quasis) {
    for (const quasi of node.quasis) {
      if (quasi.value?.raw) {
        const originalValue = quasi.value.raw
        const newValue = applyClassMappings(originalValue, classMapping)
        if (newValue !== originalValue) {
          quasi.value.raw = newValue
          quasi.value.cooked = newValue
          onTransform(1)
        }
      }
    }
    // Also traverse expressions inside template literals
    if (node.expressions) {
      for (const expr of node.expressions) {
        transformExpression(expr, classMapping, onTransform)
      }
    }
    return
  }

  // Function call: cn('...', '...')
  if (node.type === 'CallExpression' && node.arguments) {
    for (const arg of node.arguments) {
      transformExpression(arg, classMapping, onTransform)
    }
    return
  }

  // Array expression: ['...', '...']
  if (node.type === 'ArrayExpression' && node.elements) {
    for (const element of node.elements) {
      if (element) {
        transformExpression(element, classMapping, onTransform)
      }
    }
    return
  }

  // Conditional expression: condition ? '...' : '...'
  if (node.type === 'ConditionalExpression') {
    transformExpression(node.consequent, classMapping, onTransform)
    transformExpression(node.alternate, classMapping, onTransform)
    return
  }

  // Logical expression: condition && '...'
  if (node.type === 'LogicalExpression') {
    transformExpression(node.left, classMapping, onTransform)
    transformExpression(node.right, classMapping, onTransform)
    return
  }

  // Object expression (for class binding objects)
  if (node.type === 'ObjectExpression' && node.properties) {
    for (const prop of node.properties) {
      if (prop.key) {
        transformExpression(prop.key, classMapping, onTransform)
      }
    }
  }
}
