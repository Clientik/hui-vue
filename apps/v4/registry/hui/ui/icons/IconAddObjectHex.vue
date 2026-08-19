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
    <path d="M15.4907 4.2525H8.51802C7.90683 4.2525 7.33868 4.57962 7.02878 5.11333L3.55103 11.1391C3.24113 11.6729 3.24113 12.3271 3.55103 12.8608L7.02878 18.8866C7.33868 19.4203 7.90683 19.7475 8.51802 19.7475H15.4821C16.0933 19.7475 16.6615 19.4203 16.9714 18.8866L20.4491 12.8608C20.759 12.3271 20.759 11.6729 20.4491 11.1391L16.9714 5.11333C16.6701 4.57962 16.1019 4.2525 15.4907 4.2525Z" fill="#212121" />
    <path d="M15.4907 4.2525H8.51802C7.90683 4.2525 7.33868 4.57962 7.02878 5.11333L3.55103 11.1391C3.24113 11.6729 3.24113 12.3271 3.55103 12.8608L7.02878 18.8866C7.33868 19.4203 7.90683 19.7475 8.51802 19.7475H15.4821C16.0933 19.7475 16.6615 19.4203 16.9714 18.8866L20.4491 12.8608C20.759 12.3271 20.759 11.6729 20.4491 11.1391L16.9714 5.11333C16.6701 4.57962 16.1019 4.2525 15.4907 4.2525Z" fill="url(#hui-hex-a)" />
    <defs>
      <linearGradient id="hui-hex-a" x1="12.0001" y1="19.7475" x2="12.0001" y2="4.2525" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2C2C2E" /><stop offset="0.245206" stop-color="#5D5D61" /><stop offset="1" stop-color="#D0D0D0" />
      </linearGradient>
    </defs>
  </svg>
</template>
