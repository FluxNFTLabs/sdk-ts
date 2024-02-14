<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue'])

const currentIndex = ref(props.modelValue)
const oldIndex = ref(props.modelValue)
watch(
  () => props.modelValue,
  (newVal) => {
    oldIndex.value = currentIndex.value
    currentIndex.value = newVal
  }
)

watch(currentIndex, (newIndex) => {
  emit('update:modelValue', newIndex)
})
provide('activeIndex', currentIndex)
provide('oldIndex', oldIndex)
</script>

<template>
  <div class="tw-flex tw-overflow-hidden tw-relative tw-w-full">
    <slot :active-index="currentIndex"></slot>
  </div>
</template>
