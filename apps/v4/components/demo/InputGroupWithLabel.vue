<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/registry/hui/ui/input-group'
import { Label } from '@/registry/hui/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/hui/ui/tooltip'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput id="email" placeholder="hui" />
      <InputGroupAddon>
        <Label for="email">@</Label>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput id="email-2" placeholder="hui@vercel.com" />
      <InputGroupAddon align="block-start">
        <Label for="email-2" class="text-foreground">
          Email
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                class="ml-auto rounded-full"
                size="icon-xs"
              >
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
