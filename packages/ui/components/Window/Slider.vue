<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  enterFrom: {
    type: String,
    default: 'left'
  },
  leaveTo: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <transition
    name="slide"
    :enter-active-class="'slide-enter-active'"
    :leave-active-class="'slide-leave-active'"
    :enter-from-class="'slide-enter-from-' + enterFrom"
    :leave-to-class="'slide-leave-to-' + leaveTo"
    appear
  >
    <div v-show="isOpen" class="slider-container tw-bg-inherit">
      <div class="slider-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slider-container {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
}
.slider-content {
  width: 100%;
  height: fit-content;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  opacity: 1;
}

.slide-enter-from-left {
  transform: translateX(-15%);
  opacity: 0;
  position: absolute;
}
.slide-leave-to-left {
  transform: translateX(-15%);
  opacity: 0;
  position: absolute;
}
.slide-enter-from-right {
  transform: translateX(15%);
  opacity: 0;
  position: absolute;
}
.slide-leave-to-right {
  transform: translateX(15%);
  opacity: 0;
  position: absolute;
}
</style>
