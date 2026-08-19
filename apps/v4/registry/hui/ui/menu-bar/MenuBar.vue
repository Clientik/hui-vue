<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { MenuBarVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { menuBarVariants } from "."

interface Props extends PrimitiveProps {
  orientation?: MenuBarVariants["orientation"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  orientation: "vertical",
})
</script>

<template>
  <Primitive
    data-slot="menu-bar"
    :as="as"
    :as-child="asChild"
    role="toolbar"
    :aria-orientation="orientation"
    :data-orientation="orientation"
    :class="cn(menuBarVariants({ orientation }), props.class)"
  >
    <slot />
  </Primitive>
</template>
