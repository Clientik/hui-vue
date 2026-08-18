<script setup lang="ts">
import { Plus } from '@lucide/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/hui/ui/avatar'
import { Button } from '@/registry/hui/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/registry/hui/ui/item'

const people = [
  {
    username: 'hui',
    avatar: 'https://github.com/hui.png',
    email: 'hui@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
]
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-6">
    <ItemGroup>
      <template v-for="(person, index) in people" :key="person.username">
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarImage :src="person.avatar" class="grayscale" />
              <AvatarFallback>{{ person.username.charAt(0) }}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent class="gap-1">
            <ItemTitle>{{ person.username }}</ItemTitle>
            <ItemDescription>{{ person.email }}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" class="rounded-full">
              <Plus />
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator v-if="index !== people.length - 1" />
      </template>
    </ItemGroup>
  </div>
</template>
