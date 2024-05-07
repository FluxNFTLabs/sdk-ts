<script setup lang="ts">
import { computed } from 'vue'
import { useSnackbarStore } from '../../store/snackbar'
import Toast from './Toast.vue'
const snackbarStore = useSnackbarStore()

const message = computed(() => snackbarStore.store.message)
const timeout = computed(() => snackbarStore.store.timeout)
const createAt = computed(() => snackbarStore.store.createAt)
const color = computed(() => snackbarStore.store.color)
const action = computed(() => snackbarStore.store.action)
const isShow = computed({
  get() {
    return snackbarStore.store.show
  },
  set() {
    snackbarStore.hide()
  }
})
</script>
<template>
  <Toast v-model="isShow" :timeout="timeout" :color="color" :createAt="createAt">
    {{ message }}
    <button v-if="action" @click="action?.click">
      <BaseIcons :name="action.icon" />
    </button>
  </Toast>
</template>
