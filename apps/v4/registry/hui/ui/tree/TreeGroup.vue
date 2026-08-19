<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <!-- One indent level: the padding steps the children in and the guide line
       ties them back to the item that owns them. -->
  <Primitive
    data-slot="tree-group"
    :as="as"
    :as-child="asChild"
    role="group"
    :class="cn('relative flex flex-col pl-5', props.class)"
  >
    <span
      aria-hidden="true"
      data-slot="tree-group-guide"
      class="bg-foreground-tertiary/50 pointer-events-none absolute top-0 bottom-0 left-[9px] w-px"
    />
    <slot />
  </Primitive>
</template>
