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
  <div class="base-chip" :class="color">
    <slot />
    <button v-if="onDelete" @click="onDelete">
      <BaseIcons name="close" width="24" height="24" />
    </button>
  </div>
</template>
