<script setup lang="ts">
import { ref } from 'vue'
import { IconEye, IconEyeOff, IconOpen, IconSelectFace, IconSelectObject } from '@/registry/hui/ui/icons'
import { Tree, TreeItem } from '@/registry/hui/ui/tree'

const visible = ref(true)
</script>

<template>
  <Tree class="max-w-sm">
    <TreeItem>
      <template #icon>
        <IconSelectObject />
      </template>
      One toggle
      <template #actions>
        <button type="button" aria-label="Toggle visibility" @click="visible = !visible">
          <IconEye v-if="visible" />
          <IconEyeOff v-else />
        </button>
      </template>
    </TreeItem>

    <TreeItem>
      <template #icon>
        <IconSelectObject />
      </template>
      Four toggles
      <template #actions>
        <IconSelectFace />
        <IconOpen />
        <IconEyeOff />
        <IconEye />
      </template>
    </TreeItem>
  </Tree>
</template>
