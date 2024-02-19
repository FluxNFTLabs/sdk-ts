<template>
  <div class="progress-circular">
    <svg viewBox="25 25 50 50" :width="width" :height="height">
      <circle
        class="progress-circular-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'currentColor'
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  }
})

const strokeWidth = ref(4)
</script>

<style scoped>
.progress-circular {
  display: inline-block;
  transform: rotate(-90deg);
}

.progress-circular svg {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.progress-circular-path {
  stroke-dasharray: 126.92;
  stroke: v-bind(color);
  transition: stroke-dashoffset 0.35s;
  transform-origin: center;
}

.progress-circular .progress-circular-path {
  stroke-dasharray: 20, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
