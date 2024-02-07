<script lang="ts" setup>
import { defineProps, watch, onMounted } from 'vue'
type TabType = 'horizontal' | 'vertical'
const props = defineProps({
  modelValue: Number,
  items: {
    type: Array,
    default: () => []
  },
  type: {
    type: String as () => TabType,
    default: 'horizontal'
  }
})
const emit = defineEmits(['update:modelValue'])
const position = ref('0px')
const width = ref('0px')
const top = ref('0px')
const indexActive = ref(0)
const ids = ref([])
const onActive = (index: number) => {
  if (index === indexActive.value) return
  indexActive.value = index
  const element = document.getElementById(ids.value[index])
  if (!element) return
  const rect = element.getBoundingClientRect()
  position.value = element.offsetLeft + 'px'
  width.value = rect.width + 'px'
  if (props.type === 'vertical') {
    top.value = element.offsetTop + rect.height + 'px'
  }
  emit('update:modelValue', index)
}
const initId = (index: Number) => {
  if (ids.value[index]) {
    return ids.value[index]
  }
  const id = Math.random().toString(36).substr(2, 9)
  ids.value[index] = id
  return id
}
onMounted(() => {
  let index = props.modelValue || 0
  onActive(index)
})
watch(props.modelValue, (value) => {
  if (value !== indexActive.value) {
    onActive(value)
  }
})
</script>
<template>
  <div class="tabs" :class="type">
    <div
      v-for="(tab, index) in items"
      :key="tab"
      class="tabs_item"
      :class="indexActive === index ? 'active' : ''"
      @click="onActive(index)"
      :id="initId(index)"
    >
      {{ tab }}
    </div>
    <div class="active-border" :class="type" />
  </div>
</template>
<style scoped>
.active-border {
  left: v-bind('position');
  transition: all 0.2s ease-in-out;
  width: v-bind('width');
}
.active-border.vertical {
  top: v-bind('top');
}
</style>
