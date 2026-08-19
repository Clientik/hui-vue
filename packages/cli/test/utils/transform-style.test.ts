import type { Config } from '../../src/utils/get-config'
import { describe, expect, it } from 'vitest'
import { transform as metaTransform } from 'vue-metamorph'
import { transformStyle } from '../../src/utils/transformers/transform-style'

function createTestConfig(style: string): Config {
  return {
    style,
    typescript: true,
    tailwind: {
      baseColor: 'neutral',
      cssVariables: true,
      config: 'tailwind.config.ts',
      css: 'tailwind.css',
    },
    aliases: {
      components: '@/components',
      utils: '@/lib/utils',
    },
    resolvedPaths: {
      cwd: '/',
      components: '/components',
      utils: '/lib/utils',
      ui: '/ui',
      lib: '/lib',
      hooks: '/hooks',
      composables: '/composables',
      tailwindConfig: 'tailwind.config.ts',
      tailwindCss: 'tailwind.css',
    },
  }
}

describe('transformStyle', () => {
  // HUI ships one style and the registry already serves components in it, so
  // the transformer must hand every file through untouched.
  const source = `<template>
  <div class="p-6 gap-6 rounded-lg space-y-6 text-base h-10">Content</div>
</template>

<script setup lang="ts">
const variants = cva('p-6 rounded-lg')
</script>`

  function run(style: string) {
    return metaTransform(source, 'test.vue', [
      transformStyle({ filename: 'test.vue', raw: '', config: createTestConfig(style) }),
    ])
  }

  it.each([
    ['neva'],
    ['reka-neva'],
    ['hui'],
    ['new-york'],
    ['unknown-style'],
    [''],
  ])('leaves classes untouched for %s', (style) => {
    const result = run(style)

    expect(result.code).toContain('class="p-6 gap-6 rounded-lg space-y-6 text-base h-10"')
    expect(result.code).toContain(`cva('p-6 rounded-lg')`)
  })
})
