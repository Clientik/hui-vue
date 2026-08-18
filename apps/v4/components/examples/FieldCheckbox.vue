<script setup lang="ts">
import { Checkbox } from '@/styles/reka-neva/ui/checkbox'
import { Field, FieldLabel } from '@/styles/reka-neva/ui/field'
</script>

<template>
  <FieldLabel for="checkbox-demo">
    <Field orientation="horizontal">
      <Checkbox id="checkbox-demo" :default-value="true" />
      <FieldLabel for="checkbox-demo" class="line-clamp-1">
        I agree to the terms and conditions
      </FieldLabel>
    </Field>
  </FieldLabel>
</template>
