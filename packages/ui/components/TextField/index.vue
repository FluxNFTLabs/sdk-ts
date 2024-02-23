<script setup lang="ts">
import { defineProps, defineModel, ref, watch, useAttrs, defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
defineProps({
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
  inputClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  appendIcon: {
    type: String,
    default: ''
  },
  prependIcon: {
    type: String,
    default: ''
  },
  class: {
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
  <div class="base-text-field" :class="[errorMessage ? 'invalid' : '', containerClass].join(' ')">
    <p class="label" :class="labelClass" v-if="label">
      {{ label }}
    </p>
    <div class="input" :class="class">
      <BaseIcons v-if="prependIcon" :name="prependIcon" class="prepend-icon" />
      <slot v-else name="prependIcon" class="prepend-icon" />
      <input
        type="text"
        v-bind="$attrs"
        :class="inputClass"
        :value="modelValue"
        @input="inputChange"
      />

      <BaseIcons v-if="appendIcon" :name="appendIcon" class="append-icon" />
      <slot v-else name="appendIcon" class="append-icon" />
    </div>
    <p v-if="errorMessage" class="message">{{ errorMessage }}</p>
  </div>
</template>
