<script setup lang="ts">
import { defineProps, defineModel, useAttrs, defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
defineProps({
  modalValue: String,
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
  },
  maxLength: {
    type: Number,
    default: 0
  },
  inputClass: {
    type: String,
    default: ''
  }
})

defineModel('modelValue')
const $attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])
const inputChange = (e: any) => {
  emit('update:modelValue', e.target.value)
}
</script>
<template>
  <div class="base-text-area" :class="[errorMessage ? 'invalid' : '', containerClass].join(' ')">
    <p class="label" :class="labelClass">
      {{ label }}
    </p>
    <div class="relative w-full">
      <textarea
        class="input"
        type="text"
        v-bind="$attrs"
        :class="inputClass"
        :value="modelValue"
        @input="inputChange"
      />
      <p v-if="maxLength" class="max-length">{{ modelValue?.length || 0 }}/{{ maxLength }}</p>
    </div>
    <p v-if="errorMessage" class="message">{{ errorMessage }}</p>
  </div>
</template>
