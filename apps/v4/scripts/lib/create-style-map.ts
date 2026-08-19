/**
 * Parses a `style-{name}.css` file and returns a map of `cn-*` class name → expanded
 * Tailwind utility classes (the @apply value).
 *
 * The token CSS files in `apps/v4/registry/styles/` are written in a uniform shape:
 *
 *   .style-neva {
 *     .cn-button { @apply focus-visible:border-ring ...; }
 *     .cn-button-variant-default { @apply bg-primary ...; }
 *   }
 *
 * Every rule is a single `.cn-<name>` selector containing a single `@apply ...;`
 * directive, so a small regex is enough — no need for PostCSS or
 * postcss-selector-parser.
 */
export type StyleMap = Record<string, string>

const RULE_RE = /\.(cn-[\w-]+)\s*\{\s*@apply([^;]+);/g

export function createStyleMap(css: string): StyleMap {
  const result: StyleMap = {}
  let match: RegExpExecArray | null
  // eslint-disable-next-line no-cond-assign
  while ((match = RULE_RE.exec(css)) !== null) {
    const [, className, rawClasses] = match
    if (!className || !rawClasses)
      continue
    result[className] = rawClasses.trim().replace(/\s+/g, ' ')
  }
  return result
}
