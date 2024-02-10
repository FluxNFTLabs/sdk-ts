<script setup lang="ts">
import { defineProps, useAttrs, defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
defineProps({
  label: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  }
})
const $attrs = useAttrs()
</script>
<template>
  <div class="base-text-field" :class="[errorMessage ? 'invalid' : '', containerClass].join(' ')">
    <p class="label" :class="labelClass">
      {{ label }}
    </p>
    <input class="input" type="text" v-bind="$attrs" />
    <p class="message">{{ errorMessage }}</p>
  </div>
</template>
