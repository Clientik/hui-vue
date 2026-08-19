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
    <path d="M18.8473 9.20782L12.7419 12.4949V20.0477L11.9919 21.0477L11.2419 20.0477V12.4949L5.1364 9.20782L3.99194 7.54767L5.84733 7.88751L11.9919 11.1961L18.1364 7.88751L19.9919 7.54767L18.8473 9.20782Z" fill="var(--primary)" />
  </svg>
</template>
