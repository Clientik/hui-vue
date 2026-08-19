<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ChevronRight } from "@lucide/vue"
import { cn } from "@/lib/utils"
import { treeItemVariants } from "."

interface Props {
  /** Leave unset for a leaf: the chevron slot stays, so labels keep their column. */
  expandable?: boolean
  expanded?: boolean
  selected?: boolean
  /** Dims the row for objects switched off in the scene. */
  muted?: boolean
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  expandable: false,
  expanded: false,
  selected: false,
  muted: false,
})

const emits = defineEmits<{
  "update:expanded": [value: boolean]
  "select": []
}>()

function toggle() {
  emits("update:expanded", !props.expanded)
}
</script>

<template>
  <div
    data-slot="tree-item"
    role="treeitem"
    :aria-expanded="expandable ? expanded : undefined"
    :aria-selected="selected"
    :data-selected="selected ? '' : undefined"
    :data-muted="muted ? '' : undefined"
    tabindex="0"
    :class="cn(treeItemVariants({ selected, muted }), props.class)"
    @click="emits('select')"
    @keydown.enter.prevent="emits('select')"
    @keydown.space.prevent="emits('select')"
    @keydown.right.prevent="expandable && !expanded && toggle()"
    @keydown.left.prevent="expandable && expanded && toggle()"
  >
    <button
      v-if="expandable"
      type="button"
      data-slot="tree-item-trigger"
      :aria-label="expanded ? 'Collapse' : 'Expand'"
      class="text-foreground-tertiary hover:text-foreground flex size-5 shrink-0 items-center justify-center transition-colors"
      @click.stop="toggle"
    >
      <ChevronRight
        class="size-5 transition-transform duration-150"
        :class="expanded && 'rotate-90'"
      />
    </button>
    <span v-else aria-hidden="true" class="size-5 shrink-0" />

    <span data-slot="tree-item-icon" class="[&_svg]:size-5 flex size-5 shrink-0 items-center justify-center">
      <slot name="icon" />
    </span>

    <span data-slot="tree-item-label" class="min-w-0 flex-1 truncate">
      <slot />
    </span>

    <!-- Up to four toggles per row: any more and the label loses its width. -->
    <span
      v-if="$slots.actions"
      data-slot="tree-item-actions"
      class="[&>*]:size-5 [&_svg]:size-5 text-foreground-tertiary flex shrink-0 items-center gap-2"
      @click.stop
    >
      <slot name="actions" />
    </span>
  </div>
</template>
