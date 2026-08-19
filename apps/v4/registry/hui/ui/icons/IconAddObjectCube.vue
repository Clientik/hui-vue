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
    <path d="M20 7.5L12 12V21L20 16.5V7.5Z" fill="url(#hui-cube-a)" />
    <path d="M4 7.5L12 12V21L4 16.5V7.5Z" fill="url(#hui-cube-b)" />
    <path d="M20 7.5L12 12L4 7.5L12 3L20 7.5Z" fill="url(#hui-cube-c)" />
    <defs>
      <linearGradient id="hui-cube-a" x1="16" y1="21" x2="16" y2="7.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2C2C2E" /><stop offset="1" stop-color="#8E8E94" />
      </linearGradient>
      <linearGradient id="hui-cube-b" x1="8" y1="21" x2="8" y2="7.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#48484A" /><stop offset="1" stop-color="#ABABB0" />
      </linearGradient>
      <linearGradient id="hui-cube-c" x1="12" y1="12" x2="12" y2="3" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6D6D6D" /><stop offset="1" stop-color="#D3D3D3" />
      </linearGradient>
    </defs>
  </svg>
</template>
