<script setup>
import { ref, watch } from 'vue'

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
  <div class="flex relative w-full bg-inherit">
    <slot :active-index="currentIndex"></slot>
  </div>
</template>
