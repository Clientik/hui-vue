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
| `-p, --preset <preset>` | Use a preset: `reka-vega`, `reka-neva`, `reka-maia`, `reka-lyra`, `reka-mira` |
| `--base <base>` | Component library: `reka` |
| `--style <style>` | Visual style: `vega`, `nova`, `maia`, `lyra`, `mira` |
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
npx hui-kit create --template nuxt --style maia --icon-library hugeicons --font figtree
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
| `--style <style>` | Visual style: `vega`, `nova`, `maia`, `lyra`, `mira` |
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

## Visual Styles

hui-kit supports 5 visual styles that transform how components look:

| Style | Description |
|-------|-------------|
| **Vega** | The classic hui-kit look. Clean, neutral, and familiar. |
| **Neva** | Reduced padding and margins for compact layouts. |
| **Maia** | Soft and rounded, with generous spacing. |
| **Lyra** | Boxy and sharp. Pairs well with mono fonts. |
| **Mira** | Compact. Made for dense interfaces. |

## Presets

Presets are pre-configured combinations of style, icons, and fonts:

| Preset | Style | Icons | Font |
|--------|-------|-------|------|
| `reka-vega` | Vega | Lucide | Inter |
| `reka-neva` | Neva | Hugeicons | Inter |
| `reka-maia` | Maia | Hugeicons | Figtree |
| `reka-lyra` | Lyra | Hugeicons | JetBrains Mono |
| `reka-mira` | Mira | Hugeicons | Inter |

## Documentation

Visit https://clientik.github.io/hui-vue to view the documentation.

## License

Licensed under the [MIT license](https://github.com/hui-kit/blob/main/LICENSE.md).
