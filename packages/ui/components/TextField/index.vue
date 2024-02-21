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
  },

  appendIcon: {
    type: String,
    default: ''
  },
  prependIcon: {
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
    <div class="input">
      <BaseIcons v-if="prependIcon" :name="prependIcon" class="prepend-icon" />
      <slot v-else name="prependIcon" class="prepend-icon" />
      <input type="text" v-bind="$attrs" v-model="internalValue" />

      <BaseIcons v-if="appendIcon" :name="appendIcon" class="append-icon" />
      <slot v-else name="appendIcon" class="append-icon" />
    </div>
    <p v-if="errorMessage" class="message">{{ errorMessage }}</p>
  </div>
</template>
