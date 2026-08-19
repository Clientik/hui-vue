---
title: Tree
description: A hierarchy of rows with expandable groups, selection, and per-row toggles.
component: true
---

::component-preview
---
name: TreeDemo
description: A scene outliner. Click a chevron to expand or collapse, a row to select it, or the eye to mute an object.
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
npx hui-kit@latest add tree
```

::

::::tabs-content{value="manual"}
  :::steps
    ::step
    Install the following dependencies:
    ::

    ```bash
    npm install reka-ui @lucide/vue
    ```

    ::step
    Copy and paste the [GitHub source code](https://github.com/Clientik/hui-vue/tree/dev/apps/v4/registry/hui/ui/tree) into your project.
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
import { ref } from 'vue'
import { Tree, TreeGroup, TreeItem } from '@/components/ui/tree'

const expanded = ref(true)
</script>

<template>
  <Tree>
    <TreeItem v-model:expanded="expanded" expandable selected>
      Main Group
    </TreeItem>

    <TreeGroup v-if="expanded">
      <TreeItem>Cylinder</TreeItem>
      <TreeItem muted>
        Shape
      </TreeItem>
    </TreeGroup>
  </Tree>
</template>
```

`Tree` is the container, `TreeItem` is one 36px row, and `TreeGroup` is a single indent level — the guide line comes with it. Nesting groups inside groups is what makes depth, so an item never needs to know how deep it sits.

## Anatomy

A row has four slots, left to right:

- the chevron, drawn only when `expandable` is set — a leaf keeps the space so every label lines up
- `#icon`, sized to 20px
- the default slot, the label
- `#actions`, the trailing toggles

Rows are uncontrolled on purpose: `TreeItem` emits `update:expanded` and `select`, and the owner keeps the state. That keeps a tree of any shape — recursive, virtualised, or loaded on demand — the caller's business.

## Examples

### Actions

Up to four toggles fit in a row before the label starts losing width.

::component-preview
---
name: TreeActionsDemo
---
::

### Muted

An object switched off in the scene stays in the tree but drops to the tertiary foreground.

::component-preview
---
name: TreeMutedDemo
---
::
