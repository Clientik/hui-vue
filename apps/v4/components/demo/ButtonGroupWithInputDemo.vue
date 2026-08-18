<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import { Button } from '@/registry/hui/ui/button'
import { ButtonGroup } from '@/registry/hui/ui/button-group'
import { Input } from '@/registry/hui/ui/input'
</script>

<template>
  <ButtonGroup>
    <Input placeholder="Search..." />
    <Button variant="outline" aria-label="Search">
      <SearchIcon />
    </Button>
  </ButtonGroup>
</template>
