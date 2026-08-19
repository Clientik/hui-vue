<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToolRailVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { toolRailVariants } from "."

interface Props extends PrimitiveProps {
  orientation?: ToolRailVariants["orientation"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  orientation: "vertical",
})
</script>

<template>
  <Primitive
    data-slot="tool-rail"
    :as="as"
    :as-child="asChild"
    role="toolbar"
    :aria-orientation="orientation"
    :data-orientation="orientation"
    :class="cn(toolRailVariants({ orientation }), props.class)"
  >
    <slot />
  </Primitive>
</template>
