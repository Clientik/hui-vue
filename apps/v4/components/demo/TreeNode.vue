<script setup lang="ts">
import { IconEye, IconEyeOff, IconSelectObject } from '@/registry/hui/ui/icons'
import { TreeGroup, TreeItem } from '@/registry/hui/ui/tree'

interface Node {
  id: string
  label: string
  children?: Node[]
}

defineProps<{
  node: Node
  expanded: Set<string>
  selected: string
  hiddenInScene: Set<string>
}>()

const emits = defineEmits<{
  toggle: [id: string, value: boolean]
  select: [id: string]
  visibility: [id: string]
}>()
</script>

<template>
  <TreeItem
    :expandable="!!node.children"
    :expanded="expanded.has(node.id)"
    :selected="selected === node.id"
    :muted="hiddenInScene.has(node.id)"
    @update:expanded="emits('toggle', node.id, $event)"
    @select="emits('select', node.id)"
  >
    <template #icon>
      <IconSelectObject />
    </template>
    {{ node.label }}
    <template #actions>
      <button
        type="button"
        :aria-label="hiddenInScene.has(node.id) ? 'Show in scene' : 'Hide in scene'"
        class="hover:text-foreground transition-colors"
        @click="emits('visibility', node.id)"
      >
        <IconEyeOff v-if="hiddenInScene.has(node.id)" />
        <IconEye v-else />
      </button>
    </template>
  </TreeItem>

  <TreeGroup v-if="node.children && expanded.has(node.id)">
    <TreeNode
      v-for="child in node.children"
      :key="child.id"
      :node="child"
      :expanded="expanded"
      :selected="selected"
      :hidden-in-scene="hiddenInScene"
      @toggle="(id, value) => emits('toggle', id, value)"
      @select="emits('select', $event)"
      @visibility="emits('visibility', $event)"
    />
  </TreeGroup>
</template>
