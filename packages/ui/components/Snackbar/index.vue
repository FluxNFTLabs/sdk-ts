<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useSnackbarStore } from '../../store/snackbar'
import Toast from './Toast.vue'
const snackbarStore = useSnackbarStore()

const message = computed(() => snackbarStore.store.message)
const timeout = computed(() => snackbarStore.store.timeout)
const createAt = computed(() => snackbarStore.store.createAt)
const color = computed(() => snackbarStore.store.color)
const isShow = computed({
  get() {
    return snackbarStore.store.show
  },
  set() {
    snackbarStore.hide()
  }
})
const show = () => {
  snackbarStore.show({
    message: 'Hello',
    timeout: 5000,
    color: 'info'
  })
}
watchEffect(() => {
  console.log('isShow', isShow.value)
})
</script>
<template>
  <BaseButton @click="show">asds</BaseButton>
  <Toast v-model="isShow" :timeout="timeout" :color="color" :createAt="createAt">
    {{ message }}
  </Toast>
</template>
