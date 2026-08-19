<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

interface Props {
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :class="cn('size-4 shrink-0', props.class)"
    aria-hidden="true"
  >
    <path d="M20 7.5L12 12V21L20 16.5V7.5Z" fill="#2C2C2E" />
    <path d="M4 7.5L12 12V21L4 16.5V7.5Z" fill="var(--primary)" />
    <path d="M20 7.5L12 12L4 7.5L12 3L20 7.5Z" fill="#6D6D6D" />
  </svg>
</template>
