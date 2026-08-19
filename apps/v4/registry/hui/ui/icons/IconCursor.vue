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
    <path d="M7.57228 5.11671C7.41488 5.0281 7.23553 4.98607 7.05516 4.99552C6.87478 5.00498 6.70081 5.06552 6.55353 5.1701C6.40626 5.27468 6.29176 5.41897 6.22338 5.58616C6.15501 5.75334 6.13558 5.93652 6.16736 6.11433L8.50931 19.2403C8.66441 20.1095 9.81437 20.3185 10.2655 19.5607L12.8885 15.1519C12.9934 14.9758 13.1349 14.8244 13.3034 14.7078C13.4719 14.5913 13.6635 14.5124 13.8652 14.4764L19.1089 13.5408C19.9884 13.3839 20.1874 12.2105 19.4088 11.7728L7.57228 5.11671Z" fill="currentColor" />
  </svg>
</template>
