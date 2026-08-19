# hui-kit

A CLI for adding components to your project.

## Usage

### create

Use the `create` command to scaffold a new Vue project with hui-kit pre-configured.

```bash
npx hui-kit create
```

The `create` command will:
- Create a new Vue project (Nuxt, Vite, or Vite + Vue Router)
- Configure Tailwind CSS
- Set up hui-kit with your chosen design system

#### Options

| Option | Description |
|--------|-------------|
| `-t, --template <template>` | Framework template: `nuxt`, `vite`, or `vite-router` |
| `-p, --preset <preset>` | Use a preset: `reka-neva` |
| `--base <base>` | Component library: `reka` |
| `--style <style>` | Visual style: `neva` |
| `--icon-library <lib>` | Icon library: `lucide`, `tabler`, `hugeicons`, `phosphor`, `remixicon` |
| `--font <font>` | Font: `inter`, `figtree`, `jetbrains-mono`, `geist`, `geist-mono` |
| `-b, --base-color <color>` | Base color: `neutral`, `gray`, `zinc`, `stone`, `slate` |
| `-y, --yes` | Skip confirmation prompts |

#### Examples

```bash
# Interactive mode
npx hui-kit create

# Use a preset
npx hui-kit create --preset reka-neva

# Full customization
npx hui-kit create --template nuxt --style neva --icon-library lucide --font geist-sans
```

### init

Use the `init` command to initialize dependencies for an existing project.

The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx hui-kit init
```

#### Options

| Option | Description |
|--------|-------------|
| `--base <base>` | Component library: `reka` |
| `--style <style>` | Visual style: `neva` |
| `--icon-library <lib>` | Icon library: `lucide`, `tabler`, `hugeicons`, `phosphor`, `remixicon` |
| `--font <font>` | Font: `inter`, `figtree`, `jetbrains-mono`, `geist`, `geist-mono` |
| `-b, --base-color <color>` | Base color: `neutral`, `gray`, `zinc`, `stone`, `slate` |
| `-d, --defaults` | Use default configuration |
| `-y, --yes` | Skip confirmation prompts |

### add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx hui-kit add [component]
```

#### Example

```bash
npx hui-kit add alert-dialog
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx hui-kit add
```

## Visual style

HUI ships one style, **Neva**: compact spacing, Geist for text, Lucide for icons. It is the default, so neither `--style` nor `--preset` is needed unless you are scripting an explicit setup.

The matching preset is `reka-neva`:

| Preset | Style | Icons | Font |
|--------|-------|-------|------|
| `reka-neva` | Neva | Lucide | Geist |

## Documentation

Visit https://clientik.github.io/hui-vue/docs to view the documentation.

## License

Licensed under the [MIT license](https://github.com/Clientik/hui-vue/blob/main/LICENSE).
