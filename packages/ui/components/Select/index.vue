<script setup lang="ts">
import { defineProps, defineEmits, ref, useAttrs, computed, onMounted, onBeforeUnmount } from 'vue'
import { Dropdown } from 'floating-vue'
import BaseChip from '../Chip/index.vue'
import CheckBox from '../Checkbox/index.vue'
import BaseIcons from '../Icons/index.vue'
interface Option {
  value: string
  title: string
}
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String || Array,
  label: {
    type: String
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
    type: Array as () => Option[],
    default: () => []
  }
})
const $attrs = useAttrs()
const selectRef = ref(null)
const popoverWidth = ref('0px')
const dropdownAttrs = computed(() => ({
  ...$attrs,
  disabled: props.disabled
}))

let resizeObserver: ResizeObserver | null = null
onMounted(() => {
  if (selectRef.value) {
    resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect
        popoverWidth.value = `${width}px`
      }
    })
    resizeObserver.observe(selectRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver && selectRef.value) {
    resizeObserver.unobserve(selectRef.value)
  }
})

const internalValue = ref<Option | Option[] | null>(
  props.multiple
    ? Array.isArray(props.modelValue)
      ? props.options.filter((option) => props.modelValue?.includes(option.value))
      : []
    : props.options.find((option) => option.value === props.modelValue) || null
)
const handleSelect = (option: any) => {
  if (props.multiple && Array.isArray(internalValue.value)) {
    if (internalValue.value.some((item) => item.value === option.value)) {
      internalValue.value = internalValue.value.filter((item) => item.value !== option.value)
    } else {
      internalValue.value = [...internalValue.value, option]
    }
    console.log(internalValue.value)
    return emit(
      'update:modelValue',
      internalValue.value.map((item) => item.value)
    )
  }
  internalValue.value = option
  emit('update:modelValue', option.value)
}

const isActive = (value: string) => {
  return Array.isArray(internalValue.value)
    ? Boolean(internalValue.value?.find((item) => item.value === value))
    : internalValue.value?.value === value
}
</script>
<template>
  <div class="base-select" :class="[containerClass].join(' ')" ref="selectRef">
    <p class="label" :class="labelClass" v-if="label">
      {{ label }}
    </p>
    <Dropdown
      :disabled="disabled"
      :popperHideTriggers="(triggers) => (multiple ? triggers : [...triggers, 'click'])"
      :popperClass="`base-select__popover`"
    >
      <div class="select" v-bind="dropdownAttrs">
        <div class="flex-1">
          <p
            class="flex items-center"
            v-if="!internalValue || (Array.isArray(internalValue) && internalValue.length === 0)"
          >
            {{ placeholder }}
          </p>
          <p class="flex items-center" v-else-if="!Array.isArray(internalValue)">
            {{ internalValue?.title }}
          </p>
          <div v-else-if="Array.isArray(internalValue)" class="flex flex-wrap gap-2">
            <BaseChip
              v-for="item in internalValue"
              :key="item.value"
              :onDelete="() => handleSelect(item)"
              @click.stop
              >{{ item.title }}</BaseChip
            >
          </div>
        </div>
        <BaseIcons name="angleDown" />
      </div>
      <template #popper>
        <div
          :style="{ minWidth: popoverWidth }"
          class="content-popover"
          :class="multiple ? 'flex flex-col items-start' : ''"
        >
          <div
            v-if="!multiple"
            v-for="option in options"
            @click="handleSelect(option)"
            :key="option.value"
            class="content-popover__item"
            :class="isActive(option.value) ? 'content-popover__item--selected' : ''"
          >
            {{ option.title }}
          </div>
          <CheckBox
            v-if="multiple"
            v-for="option in options"
            :key="option.value"
            :onChange="() => handleSelect(option)"
            :checked="isActive(option.value)"
            class="content-popover__item multiple"
          >
            {{ option.title }}
          </CheckBox>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
