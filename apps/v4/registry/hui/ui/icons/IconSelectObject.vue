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
    <path d="M5.10552 17.5528L11.5777 20.7889C11.8554 20.9277 12.1556 20.9649 12.4356 20.8305C13.6137 20.2653 16.8006 18.4054 19.0288 17.0801C19.6326 16.7209 20 16.0702 20 15.3676L20 8.6697C20 7.94715 19.6102 7.28079 18.9805 6.92655L12.9805 3.55155C12.3716 3.20909 11.6283 3.20908 11.0194 3.55155L5.01943 6.92655C4.38968 7.28079 3.99995 7.94715 3.99995 8.6697L3.99995 15.7639C3.99995 16.5215 4.42796 17.214 5.10552 17.5528Z" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" />
  </svg>
</template>
