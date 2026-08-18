<script setup lang="ts">
import { Button } from '@/registry/hui/ui/button'
import { Spinner } from '@/registry/hui/ui/spinner'
</script>

<template>
  <Button size="sm" variant="outline" disabled>
    <Spinner class="animate-spin" />
    Submit
  </Button>
</template>
