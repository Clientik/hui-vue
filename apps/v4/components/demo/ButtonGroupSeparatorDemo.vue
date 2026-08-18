<script setup lang="ts">
import { Button } from '@/registry/hui/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/registry/hui/ui/button-group'
</script>

<template>
  <ButtonGroup>
    <Button variant="secondary" size="sm">
      Copy
    </Button>
    <ButtonGroupSeparator />
    <Button variant="secondary" size="sm">
      Paste
    </Button>
  </ButtonGroup>
</template>
