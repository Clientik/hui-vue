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
    <path d="M12 2C13.3807 2 14.5 3.11929 14.5 4.5C14.5 5.61933 13.7642 6.56613 12.75 6.88477V11.25H17.1152C17.4339 10.2358 18.3807 9.5 19.5 9.5C20.8807 9.5 22 10.6193 22 12C22 13.3807 20.8807 14.5 19.5 14.5C18.3807 14.5 17.4339 13.7642 17.1152 12.75H12.75V17.1143C13.7643 17.4328 14.5 18.3806 14.5 19.5C14.5 20.8807 13.3807 22 12 22C10.6193 22 9.5 20.8807 9.5 19.5C9.5 18.3806 10.2357 17.4328 11.25 17.1143V12.75H6.88477C6.56613 13.7642 5.61933 14.5 4.5 14.5C3.11929 14.5 2 13.3807 2 12C2 10.6193 3.11929 9.5 4.5 9.5C5.61933 9.5 6.56613 10.2358 6.88477 11.25H11.25V6.88477C10.2358 6.56613 9.5 5.61933 9.5 4.5C9.5 3.11929 10.6193 2 12 2Z" fill="currentColor" />
  </svg>
</template>
