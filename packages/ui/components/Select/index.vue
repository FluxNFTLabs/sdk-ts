<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { Dropdown } from 'floating-vue'
import IconsAngleDown from '../Icons/AngleDown.vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String,
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => []
  }
})
const selectRef = ref(null)
const popoverWidth = ref('')
onMounted(() => {
  if (selectRef.value) {
    popoverWidth.value = `${selectRef.value.offsetWidth}px`
  }
})
const isDropdownOpen = ref(false)
const internalValue = ref(props.modelValue)
const handleSelect = (option: any) => {
  internalValue.value = option
  emit('update:modelValue', option.id)
  isDropdownOpen.value = false
}
</script>
<template>
  <div class="base-select" :class="[containerClass].join(' ')">
    <p class="label" :class="labelClass">
      {{ label }}
    </p>
    <Dropdown
      v-model="isDropdownOpen"
      :disabled="disabled"
      :popperHideTriggers="(triggers) => [...triggers, 'click']"
      :popperClass="`base-select__popover tw-w-[${popoverWidth}]`"
    >
      <div
        class="select"
        ref="selectRef"
        v-bind="disabled ? { ...$attrs, disabled: true } : $attrs"
      >
        <div class="tw-flex-1">
          <p class="tw-flex tw-items-center" v-if="!internalValue">{{ placeholder }}</p>
          <p class="tw-flex tw-items-center" v-else>{{ internalValue?.text }}</p>
        </div>
        <IconsAngleDown />
      </div>
      <template #popper>
        <div :style="{ width: popoverWidth }" class="content-popover">
          <div
            v-for="(option, index) in options"
            @click="handleSelect(option)"
            :key="options.id"
            class="content-popover__item"
            :class="option.id === internalValue?.id ? 'content-popover__item--selected' : ''"
          >
            {{ option.text }}
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
