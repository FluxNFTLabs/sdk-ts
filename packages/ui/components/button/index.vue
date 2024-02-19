<script lang="ts" setup>
import { defineProps } from 'vue'
import BaseIcons from '../Icons/index.vue'
type Color = 'primary' | 'secondary' | 'tertiary' | 'default' | 'icon'
type Size = 'x-small' | 'small' | 'medium' | 'large' | 'xs' | 'sm' | 'md' | 'lg'

defineProps({
  size: {
    type: String as () => Size,
    default: 'medium',
    validator: (value: string) =>
      ['x-small', 'small', 'medium', 'large', 'xs', 'sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String as () => Color,
    default: 'default',
    validator: (value: string) =>
      ['default', 'secondary', 'primary', 'tertiary', 'icon'].includes(value)
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button class="btn" :class="[size, variant, icon ? 'icon' : ''].join(' ')">
    <BaseIcons v-if="icon" :name="icon" :size="size" />
    <slot />
  </button>
</template>
