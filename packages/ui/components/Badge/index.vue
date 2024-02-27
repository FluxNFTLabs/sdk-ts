<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  onDelete: null,
  color: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['default', 'success', 'error', 'info'].includes(value)
    }
  }
})
</script>
<template>
  <div class="base-badge" :class="color">
    <slot />
  </div>
</template>
