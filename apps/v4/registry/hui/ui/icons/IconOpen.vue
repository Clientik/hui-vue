<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

interface Props {
  class?: HTMLAttributes["class"]
}

defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :class="cn('size-4 shrink-0', props.class)"
    aria-hidden="true"
  >
    <path d="M12 12L20.5858 3.41422C21.8457 2.15429 24 3.04662 24 4.82843V14C24 19.5228 19.5228 24 14 24H4.82843C3.04662 24 2.15428 21.8457 3.41421 20.5858L12 12Z" fill="currentColor" />
  </svg>
</template>
