<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="base-text-field" :class="errorMessage ? 'invalid' : ''">
    <p class="label">
      {{ label }}
    </p>
    <input class="input" type="text" v-bind="$attrs" />
    <p class="message">{{ errorMessage }}</p>
  </div>
</template>
