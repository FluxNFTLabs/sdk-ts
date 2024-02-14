<script setup>
import Slider from './Slider.vue'
import { inject, computed } from 'vue'
const activeIndex = inject('activeIndex')
const oldIndex = inject('oldIndex')
const props = defineProps({
  value: Number
})
const isActive = computed(() => props.value === activeIndex.value)
const enterFrom = computed(() => {
  if (oldIndex.value < activeIndex.value) {
    return 'right'
  }
  return 'left'
})
const leaveTo = computed(() => {
  if (oldIndex.value < activeIndex.value) {
    return 'left'
  }
  return 'right'
})
</script>

<template>
  <Slider :isOpen="isActive" :enterFrom="enterFrom" :leaveTo="leaveTo">
    <slot></slot>
  </Slider>
</template>
