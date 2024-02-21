<script setup>
import { defineProps } from 'vue'
import BaseButton from '../Button/index.vue'
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function,
    default: () => {}
  },
  class: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <teleport to="body">
    <div class="base-modal-backdrop" v-if="isOpen" @click="onClose" />
    <Transition>
      <div class="base-modal" v-if="isOpen" :class="class" @click="onClose">
        <div class="base-modal__content" :class="contentClass" @click.stop>
          <div :class="headerClass" class="base-modal__header">
            <div class="flex-1">
              <slot name="header" />
            </div>

            <BaseButton
              icon="close"
              size="small"
              class="base-modal__button-close"
              @click="onClose"
            />
          </div>
          <div :class="bodyClass" class="base-modal__body">
            <slot />
          </div>
          <div>
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0.001);
}
</style>
