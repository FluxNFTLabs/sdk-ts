<script lang="ts" setup>
import { defineProps } from 'vue'
import BaseIcons from '../Icons/index.vue'
import ProgressCircular from '../ProgressCircular.vue'
type Color = 'primary' | 'secondary' | 'tertiary' | 'default' | 'icon' | 'text' | 'textGradient'
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
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="btn"
    :class="[size, variant, icon ? 'icon' : '', isLoading ? 'pointer-events-none' : ''].join(' ')"
  >
    <div
      class="flex items-center justify-center absolute w-full h-full top-0 left-0 z-10"
      v-if="isLoading"
    >
      <ProgressCircular rotate />
    </div>
    <BaseIcons v-if="icon" :name="icon" :size="size" />
    <slot />
  </button>
</template>
