<script setup lang="ts">
import { PlusIcon } from '@lucide/vue'

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from '@/styles/reka-neva/ui/avatar'
import { Button } from '@/styles/reka-neva/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/styles/reka-neva/ui/empty'
</script>

<template>
  <Empty class="flex-none border py-10">
    <EmptyHeader>
      <EmptyMedia>
        <AvatarGroup class="grayscale">
          <Avatar>
            <AvatarImage src="https://github.com/hui.png" alt="@hui" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </EmptyMedia>
      <EmptyTitle>No Team Members</EmptyTitle>
      <EmptyDescription>
        Invite your team to collaborate on this project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button size="sm">
        <PlusIcon />
        Invite Members
      </Button>
    </EmptyContent>
  </Empty>
</template>
