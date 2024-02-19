<template>
  <div class="progress-container">
    <div class="progress-bar"></div>
    <div class="progress-bar-bg"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  value: {
    type: Number,
    required: true,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  height: {
    type: Number,
    default: 10
  },
  color: {
    type: String,
    default: () => '#03a9f4' // Màu sắc mặc định
  }
})
const width = computed(() => {
  return `${Math.min(100, props.value)}%`
})
</script>

<style>
.progress-container {
  width: 100%;
  height: 10px;
  overflow: hidden;
  position: relative;
}
.progress-bar-bg {
  background-color: v-bind(color);
  bottom: 0;
  left: 0;
  top: 0;
  opacity: 0.2;
  position: absolute;
  width: 100%;
}
.progress-bar {
  height: 100%;
  width: v-bind(width);
  transition: width 0.5s ease;
  animation: move 1s infinite linear;
  background-image: linear-gradient(
    135deg,
    hsla(0, 0%, 100%, 0.25) 25%,
    transparent 0,
    transparent 50%,
    hsla(0, 0%, 100%, 0.25) 0,
    hsla(0, 0%, 100%, 0.25) 75%,
    transparent 0,
    transparent
  );
  background-repeat: repeat;
  background-size: 10px;
  background-color: v-bind(color);
}
@keyframes move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10px 0;
  }
}
</style>
