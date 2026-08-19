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
    <path d="M21.5313 10.414C21.8547 10.1553 22.3272 10.2078 22.586 10.5312C22.8447 10.8547 22.7922 11.3272 22.4688 11.5859L21.8389 12.0889C16.0867 16.6906 7.91337 16.6906 2.16118 12.0889L1.5313 11.5859C1.20785 11.3272 1.15535 10.8547 1.41411 10.5312C1.67287 10.2078 2.14535 10.1553 2.4688 10.414L3.0977 10.918C8.30207 15.0814 15.698 15.0814 20.9024 10.918L21.5313 10.414Z" fill="currentColor" />
  </svg>
</template>
