<script setup lang="ts">
import { Button } from '@/registry/hui/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/registry/hui/ui/empty'
import { Spinner } from '@/registry/hui/ui/spinner'
</script>

<template>
  <Empty class="w-full">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Spinner />
      </EmptyMedia>
      <EmptyTitle>Processing your request</EmptyTitle>
      <EmptyDescription>
        Please wait while we process your request. Do not refresh the page.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline" size="sm">
        Cancel
      </Button>
    </EmptyContent>
  </Empty>
</template>
