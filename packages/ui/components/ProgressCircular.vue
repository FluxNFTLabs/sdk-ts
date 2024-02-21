<template>
  <div v-if="rotate" class="progress-circular">
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
    <div class="content">
      <slot />
    </div>
  </div>
  <div v-else class="progress-circular-2">
    <svg viewBox="0 0 50 50" :width="width" :height="height">
      <circle
        class="progress-circular-background"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <circle
        class="progress-circular-value"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke="color"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (value / 100) * circumference"
      />
    </svg>
  </div>
</template>

<script setup>
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
  },
  value: {
    type: Number,
    default: 0
  },
  rotate: {
    type: Boolean,
    default: false
  },
  strokeWidth: {
    type: Number,
    default: 4
  }
})
const radius = 20
const circumference = computed(() => 2 * Math.PI * radius)
</script>

<style scoped>
.progress-circular {
  display: inline-block;
  position: relative;
  /* transform: rotate(-90deg); */
}
.progress-circular .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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

.progress-circular-2 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.progress-circular-background,
.progress-circular-value {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.progress-circular-background {
  stroke: #f8fafc1a;
}
</style>
