<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { treeVariants } from "."

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <Primitive
    data-slot="tree"
    :as="as"
    :as-child="asChild"
    role="tree"
    :class="cn(treeVariants(), props.class)"
  >
    <slot />
  </Primitive>
</template>
