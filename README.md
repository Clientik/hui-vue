# HUI

A Vue design system you own: components are copied into your project as source, not installed as a black box. Built on [Reka UI](https://reka-ui.com) and Tailwind CSS v4.

![hero](apps/v4/public/opengraph-image.png)

## Quick start

Add HUI to an existing Vue or Nuxt project:

```bash
npx hui-kit@latest init
```

Then add the components you need:

```bash
npx hui-kit@latest add button tree tool-rail
```

Each command copies real `.vue` files into `components/ui`, wires up the imports, and installs whatever those files depend on. From that point the code is yours to edit.

## Packages

| Package | Description |
|---------|-------------|
| [`hui-kit`](https://www.npmjs.com/package/hui-kit) | CLI: `init`, `add`, `create` |
| [`hui-nuxt`](https://www.npmjs.com/package/hui-nuxt) | Nuxt module that auto-imports the components |

## Documentation

Visit https://clientik.github.io/hui-vue/docs to view the documentation.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/Clientik/hui-vue/blob/main/LICENSE).
