<script lang="ts" setup>
import Datepicker from '@vuepic/vue-datepicker'
import { ref, watch } from 'vue'
import dayjs from 'dayjs'
// Define props and emits
const props = defineProps({
  modelValue: String, // Changed to modelValue to work with v-model
  buttonClass: {
    type: String,
    default: () => ({})
  },
  format: {
    type: String,
    default: 'MM/DD/YYYY'
  },
  hideDetails: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessages: {
    type: String,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()
const internalValue = ref(props.modelValue)
const internalTime = ref(
  internalValue.value ? dayjs(internalValue.value).format('HH:mm:ss') : '00:00:00'
)
const internalDateTime = ref(internalValue.value)
// Update internal value when the prop changes
watch([() => internalValue.value], () => {
  const dateTime = dayjs(internalValue.value)
  internalDateTime.value = dateTime.toISOString()
  emit('update:modelValue', dateTime)
})

// Compute attributes for v-date-picker
const datePickerAttrs = computed(() => {
  const { modelValue, buttonClass, format, errorMessages, ...otherAttrs } = { ...props, ...attrs }
  return otherAttrs
})
</script>

<template>
  <Datepicker
    time-picker-inline
    enable-seconds
    seconds-grid-increment="1"
    minutes-grid-increment="1"
    dark
    :min-date="new Date()"
    v-model="internalValue"
    v-bind="datePickerAttrs"
  >
    <template #trigger>
      <BaseTextField
        containerClass="w-full"
        :class="buttonClass"
        :value="internalValue ? dayjs(internalDateTime).format(format) : format"
        v-bind="props"
        readonly
        :error-message="errorMessages"
        :disabled="disabled"
      ></BaseTextField>
    </template>
    <template #input-icon>
      <slot name="input-icon" />
    </template>

    <template #clear-icon>
      <slot name="clear-icon" />
    </template>
  </Datepicker>
</template>
