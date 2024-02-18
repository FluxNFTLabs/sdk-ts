<script setup lang="ts">
import { computed, defineAsyncComponent, useAttrs } from 'vue'
const attrs = useAttrs()
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg'].includes(value)
  }
})

const filteredAttrs = computed(() => {
  const filteredAttrs = { ...attrs }

  const classes = (filteredAttrs.class as string) || ''
  const defaultClasses: string[] = []

  if (!classes.includes('cursor-')) {
    defaultClasses.push('cursor-pointer')
  }

  if (!classes.includes('w-') && !classes.includes('h-') && !classes.includes('min-w-')) {
    switch (props.size) {
      case 'xs':
        defaultClasses.push('h-2 w-2 min-w-2')
        break
      case 'sm':
        defaultClasses.push('h-3 w-3 min-w-3')
        break
      case 'md':
        defaultClasses.push('h-4 w-4 min-w-4')
        break
      case 'lg':
        defaultClasses.push('h-6 w-6 min-w-6')
        break

      default:
        defaultClasses.push('h-4 w-4 min-w-4')
        break
    }
  }

  return { ...attrs, class: [...defaultClasses, classes].join(' ') }
})

const dynamicComponent = defineAsyncComponent<Record<string, unknown>>(() => {
  let name = props.name
  //uppercase first letter
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return new Promise((resolve, _reject) => {
    const comps = import.meta.glob('./**/*.vue')

    try {
      return comps[`./${name}.vue`]().then((component: any) => resolve(component.default))
    } catch (e) {
      console.log({ e, name })
    }
  })
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <component v-bind="filteredAttrs" :is="dynamicComponent" />
</template>
