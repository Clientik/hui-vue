<script setup lang="ts">
import { Button } from '@/registry/hui/ui/button'
import { Spinner } from '@/registry/hui/ui/spinner'
</script>

<template>
  <Button disabled>
    <Spinner />
    Processing Payment
  </Button>
</template>
