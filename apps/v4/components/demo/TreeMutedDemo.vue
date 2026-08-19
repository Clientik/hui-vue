<script setup lang="ts">
import { IconEye, IconEyeOff, IconSelectObject } from '@/registry/hui/ui/icons'
import { Tree, TreeItem } from '@/registry/hui/ui/tree'
</script>

<template>
  <Tree class="max-w-sm">
    <TreeItem>
      <template #icon>
        <IconSelectObject />
      </template>
      Shape
      <template #actions>
        <IconEye />
      </template>
    </TreeItem>

    <TreeItem muted>
      <template #icon>
        <IconSelectObject />
      </template>
      Shape.001
      <template #actions>
        <IconEyeOff />
      </template>
    </TreeItem>

    <TreeItem selected>
      <template #icon>
        <IconSelectObject />
      </template>
      Shape.002
      <template #actions>
        <IconEye />
      </template>
    </TreeItem>
  </Tree>
</template>
