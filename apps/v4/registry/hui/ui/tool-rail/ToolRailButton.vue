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
    <svg
      v-if="showArrow"
      data-slot="tool-rail-button-arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      class="text-foreground-tertiary group-data-[active]/tool-rail-button:text-foreground absolute right-1 bottom-1 size-2.5"
    >
      <path
        d="M12 12L20.5858 3.41422C21.8457 2.15429 24 3.04662 24 4.82843V14C24 19.5228 19.5228 24 14 24H4.82843C3.04662 24 2.15428 21.8457 3.41421 20.5858L12 12Z"
        fill="currentColor"
      />
    </svg>
  </Primitive>
</template>
