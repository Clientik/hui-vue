<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToolRailButtonVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { toolRailButtonVariants } from "."

interface Props extends PrimitiveProps {
  position?: ToolRailButtonVariants["position"]
  active?: boolean
  /** Shows the corner marker that tells the user a submenu is available. */
  showArrow?: boolean
  label: string
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  position: "default",
  active: false,
  showArrow: false,
})
</script>

<template>
  <Primitive
    data-slot="tool-rail-button"
    :as="as"
    :as-child="asChild"
    :aria-label="label"
    :aria-pressed="active"
    :data-active="active ? '' : undefined"
    :class="cn(toolRailButtonVariants({ position, active }), props.class)"
  >
    <slot />
    <span
      v-if="showArrow"
      data-slot="tool-rail-button-arrow"
      aria-hidden="true"
      class="border-b-foreground-tertiary absolute right-1 bottom-1 size-0 border-r-4 border-b-4 border-r-transparent"
    />
  </Primitive>
</template>
