<script setup lang="ts">
import { defineProps, ref, watch, useAttrs, defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  modalValue: String,
  label: {
    type: String
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
const internalValue = ref(props.modalValue || $attrs.value)
const emit = defineEmits(['update:modelValue'])

//watch internalValue and emit update:modelValue
watch(internalValue, (value) => {
  emit('update:modelValue', value)
})
//props modalValue if different from internalValue then update internalValue
watch(
  () => props.modalValue,
  (value) => {
    if (value !== internalValue.value) {
      internalValue.value = value
    }
  }
)
</script>
<template>
  <div class="base-text-field" :class="[errorMessage ? 'invalid' : '', containerClass].join(' ')">
    <p class="label" :class="labelClass" v-if="label">
      {{ label }}
    </p>
    <input class="input" type="text" v-bind="$attrs" v-model="internalValue" />
    <p v-if="errorMessage" class="message">{{ errorMessage }}</p>
  </div>
</template>
