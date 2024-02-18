<script lang="ts" setup>
import { defineProps } from 'vue'
type Color = 'primary' | 'secondary' | 'tertiary'
type Size = 'small' | 'medium' | 'large'

defineProps({
  size: {
    type: String as () => Size,
    default: 'medium'
  },
  color: {
    type: String as () => Color,
    default: 'default'
  },
  variant: {
    type: String as () => Color,
    default: 'default',
    validator: (value: string) => ['default', 'secondary', 'primary', 'tertiary'].includes(value)
  },
  icon: {
    type: String,
    default: false
  }
})
</script>

<template>
  <button class="btn" :class="[size, variant, color, icon ? 'icon' : ''].join(' ')">
    <BaseIcons v-if="icon" :name="icon" />
    <slot />
  </button>
</template>
