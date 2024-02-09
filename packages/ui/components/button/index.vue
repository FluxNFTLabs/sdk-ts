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
  icon: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="btn" :class="[size, color, icon ? 'icon' : ''].join(' ')">
    <slot />
  </button>
</template>
