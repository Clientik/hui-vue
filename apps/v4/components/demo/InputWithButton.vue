<script setup lang="ts">
import { Button } from '@/registry/hui/ui/button'
import { Input } from '@/registry/hui/ui/input'
</script>

<template>
  <div class="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="Email" />
    <Button type="submit">
      Subscribe
    </Button>
  </div>
</template>
