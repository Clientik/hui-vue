<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Hui Nuxt
- Package name: hui-nuxt
- Description: My new Nuxt module
-->

# Hui Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Hui Vue module for Nuxt.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/unovue/hui-vue?file=playground%2Fapp.vue) -->
- [📖 &nbsp;Documentation](http://localhost:3000/docs/installation/nuxt.html)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ Auto-import correct and relevant components
- more to come...

## Quick Setup

1. Add `hui-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D hui-nuxt

# Using yarn
yarn add --dev hui-nuxt

# Using npm
npm install --save-dev hui-nuxt
```

2. Add `hui-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'hui-nuxt'
  ],
  hui: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
```

That's it! You can now use Hui Nuxt in your Nuxt app ✨

### Multiple component directories

Projects that split their base UI components from custom extensions can configure multiple directories, each with its own optional prefix:

```ts
export default defineNuxtConfig({
  modules: ['hui-nuxt'],
  hui: {
    prefix: 'Ui',
    componentDir: [
      '@/components/ui',
      {
        path: '@/components/ai',
        prefix: 'Ai',
      },
    ],
  },
})
```

Each directory is ignored by Nuxt's default auto-import scanning and re-registered through the module, ensuring clean separation without console warnings. See [issue #1593](https://github.com/unovue/hui-vue/issues/1593) for the background.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/hui-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/hui-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/hui-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/hui-nuxt

[license-src]: https://img.shields.io/npm/l/hui-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/hui-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
