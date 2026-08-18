---
title: Badge
description: Displays a badge or a component that looks like a badge.
component: true
---

::component-preview
---
name: BadgeDemo
description: A default badge
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
npx hui-vue@latest add badge
```

::

::::tabs-content{value="manual"}
  :::steps
    ::step
    Copy and paste the [GitHub source code](https://github.com/unovue/hui-vue/tree/dev/apps/v4/registry/hui/ui/badge) into your project.
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
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge variant="default | outline | secondary | destructive">
    Badge
  </Badge>
</template>
```

### Link

You can use the `as-child` prop to make another component look like a badge. Here's an example of a link that looks like a badge.

```vue showLineNumbers
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge as-child>
    <a href="#">Badge</a>
  </Badge>
</template>
```
