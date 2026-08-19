<script setup lang="ts">
import { ref } from 'vue'
import {
  IconCursor,
  IconMove,
  IconSelectEdge,
  IconSelectFace,
  IconSelectObject,
} from '@/registry/hui/ui/icons'
import { ToolRail, ToolRailButton } from '@/registry/hui/ui/tool-rail'

const tools = [
  { id: 'select', label: 'Select', icon: IconCursor },
  { id: 'move', label: 'Move', icon: IconMove },
  { id: 'object', label: 'Object mode', icon: IconSelectObject, arrow: true },
  { id: 'edge', label: 'Edge mode', icon: IconSelectEdge },
  { id: 'face', label: 'Face mode', icon: IconSelectFace },
]

const active = ref('object')

// Only the ends of the rail keep their rounding, so the buttons weld together.
function positionOf(index: number) {
  if (tools.length === 1)
    return 'default'
  if (index === 0)
    return 'top'
  if (index === tools.length - 1)
    return 'bottom'
  return 'middle'
}
</script>

<template>
  <ToolRail>
    <ToolRailButton
      v-for="(tool, index) in tools"
      :key="tool.id"
      :label="tool.label"
      :position="positionOf(index)"
      :active="active === tool.id"
      :show-arrow="tool.arrow"
      @click="active = tool.id"
    >
      <component :is="tool.icon" />
    </ToolRailButton>
  </ToolRail>
</template>
