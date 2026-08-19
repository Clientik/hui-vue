---
title: Tool Rail
description: A compact rail of icon-only tools, welded into a single bordered strip.
component: true
---

::component-preview
---
name: ToolRailDemo
description: A vertical tool rail.
---
::

## Installation

:::::code-tabs

:::tabs-list

  ::tabs-trigger{value="cli"}
  CLI
  ::

  ::tabs-trigger{value="manual"}
  Manual
  ::

:::

::tabs-content{value="cli"}

```bash
npx hui-kit@latest add tool-rail
```

::

::::tabs-content{value="manual"}
  :::steps
    ::step
    Install the following dependencies:
    ::

    ```bash
    npm install reka-ui
    ```

    ::step
    Copy and paste the [GitHub source code](https://github.com/Clientik/hui-vue/tree/dev/apps/v4/registry/hui/ui/tool-rail) into your project.
    ::

    ::step
    Update the import paths to match your project setup.
    ::
  :::
::::

:::::

## Usage

```vue showLineNumbers
<script setup lang="ts">
import { ToolRail, ToolRailButton } from '@/components/ui/tool-rail'
</script>

<template>
  <ToolRail>
    <ToolRailButton label="Select" position="top" active />
    <ToolRailButton label="Move" position="middle" />
    <ToolRailButton label="Rotate" position="bottom" show-arrow />
  </ToolRail>
</template>
```

`position` controls which corners stay round, so stacked buttons weld into one
strip. Give the first button `top`, the last `bottom`, everything between
`middle` — the same idea as `position` on [Input](/docs/components/input), where
it welds fields into a group.

Every button needs a `label`: it has no visible text, so without one the button
is unnamed for a screen reader.

## Examples

### Horizontal

::component-preview
---
name: ToolRailHorizontalDemo
description: A horizontal tool rail.
---
::
