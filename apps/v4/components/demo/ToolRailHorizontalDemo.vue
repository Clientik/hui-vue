<script setup lang="ts">
import { ref } from 'vue'
import { IconAddObjectCube, IconAddObjectCylinder, IconAddObjectHex } from '@/registry/hui/ui/icons'
import { ToolRail, ToolRailButton } from '@/registry/hui/ui/tool-rail'

const shapes = [
  { id: 'cube', label: 'Add cube', icon: IconAddObjectCube },
  { id: 'hex', label: 'Add hexagon', icon: IconAddObjectHex },
  { id: 'cylinder', label: 'Add cylinder', icon: IconAddObjectCylinder },
]

const active = ref('cube')
</script>

<template>
  <ToolRail orientation="horizontal">
    <ToolRailButton
      v-for="(shape, index) in shapes"
      :key="shape.id"
      :label="shape.label"
      :position="index === 0 ? 'top' : index === shapes.length - 1 ? 'bottom' : 'middle'"
      :active="active === shape.id"
      @click="active = shape.id"
    >
      <component :is="shape.icon" />
    </ToolRailButton>
  </ToolRail>
</template>
