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
    <circle cx="12.0161" cy="12.0162" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="12.0161" cy="21" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="12.0161" cy="3" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="4" cy="7.5" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="4" cy="16.5435" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="20.0608" cy="7.56073" r="1" fill="var(--primary)" stroke="var(--primary)" />
    <circle cx="20.0608" cy="16.5435" r="1" fill="var(--primary)" stroke="var(--primary)" />
  </svg>
</template>
