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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    :class="cn('shrink-0', props.class)"
    aria-hidden="true"
  >
    <path d="M20 7.5L12 12V21L20 16.5V7.5Z" fill="#2C2C2E" />
    <path d="M4 7.5L12 12V21L4 16.5V7.5Z" fill="#48484A" />
    <path d="M20 7.5L12 12L4 7.5L12 3L20 7.5Z" fill="#6D6D6D" />
    <path d="M12 20.5V12M12 12L3.99194 7.54767M12 12L19.5171 7.65996" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" />
  </svg>
</template>
