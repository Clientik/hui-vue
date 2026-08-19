<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from '@/registry/hui/ui/tree'
import TreeNode from './TreeNode.vue'

interface Node {
  id: string
  label: string
  children?: Node[]
}

const nodes: Node[] = [
  {
    id: 'main',
    label: 'Main Group',
    children: [
      { id: 'cylinder', label: 'Cylinder' },
      { id: 'cylinder-001', label: 'Cylinder.001' },
      { id: 'shape', label: 'Shape' },
      { id: 'shape-001', label: 'Shape.001' },
      {
        id: 'group',
        label: 'Group',
        children: [
          { id: 'shape-002', label: 'Shape.002' },
          { id: 'shape-003', label: 'Shape.003' },
          {
            id: 'group-001',
            label: 'Group.001',
            children: [
              { id: 'cube', label: 'Cube' },
              { id: 'cube-001', label: 'Cube.001' },
            ],
          },
        ],
      },
      { id: 'group-002', label: 'Group.002', children: [{ id: 'circle', label: 'Circle' }] },
    ],
  },
]

const expanded = ref(new Set(['main', 'group']))
const selected = ref('shape-001')
const hiddenInScene = ref(new Set(['shape']))

function toggle(id: string, value: boolean) {
  value ? expanded.value.add(id) : expanded.value.delete(id)
  expanded.value = new Set(expanded.value)
}

function toggleVisibility(id: string) {
  hiddenInScene.value.has(id) ? hiddenInScene.value.delete(id) : hiddenInScene.value.add(id)
  hiddenInScene.value = new Set(hiddenInScene.value)
}
</script>

<template>
  <Tree class="max-w-sm">
    <template v-for="node in nodes" :key="node.id">
      <TreeNode
        :node="node"
        :expanded="expanded"
        :selected="selected"
        :hidden-in-scene="hiddenInScene"
        @toggle="toggle"
        @select="selected = $event"
        @visibility="toggleVisibility"
      />
    </template>
  </Tree>
</template>
