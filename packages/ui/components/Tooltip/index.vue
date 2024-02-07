<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import { ref } from 'vue'
import { Menu, TriggerEvent } from 'floating-vue'

defineProps({
  triggers: {
    type: Array as () => TriggerEvent[],
    default: () => ['click', 'hover', 'focus'],
    required: false
  },
  delay: {
    type: String,
    required: false
  }
})

const emit = defineEmits<{
  'on:hide': []
}>()

const isOpen = ref(false)

function onHide() {
  isOpen.value = false

  emit('on:hide')
}

function onMouseEnter() {
  isOpen.value = true
}

function onMouseLeave() {
  isOpen.value = false
}

function onUpdate(value: boolean) {
  isOpen.value = value
}

function onToggle() {
  isOpen.value = !isOpen.value
}

const closeDebounce = useDebounceFn(() => {
  isOpen.value = false
}, 50)
</script>

<template>
  <Menu
    v-bind="$attrs"
    :delay="{ hide: Number(delay) || 100, show: 0 }"
    :popperTriggers="triggers"
    :triggers="triggers"
    :distance="8"
    :shown="true"
    @update:shown="onUpdate"
    @apply-hide="onHide"
    popperClass="base-tooltip"
  >
    <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot v-bind="{ isOpen, toggle: onToggle }" />
    </div>

    <template #popper>
      <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <slot name="content" v-bind="{ close: closeDebounce }" />
      </div>
    </template>
  </Menu>
</template>
