import { ref } from 'vue'
import { defineStore } from 'pinia'
type SnackbarColor = 'success' | 'error' | 'warning' | 'info'
export interface SnackbarStoreType {
  message?: string
  timeout?: number
  color?: SnackbarColor
  show?: boolean
  createAt?: number
}
export const useSnackbarStore = defineStore('SnackbarStore', () => {
  const store = ref<SnackbarStoreType>({
    message: '',
    timeout: 8000,
    color: 'success',
    show: false
  })

  const show = ({ message, color = 'success', timeout = 8000 }: SnackbarStoreType) => {
    store.value = {
      ...store.value,
      message,
      color,
      timeout,
      show: true,
      createAt: Date.now()
    }
  }

  const hide = () => {
    store.value = {
      ...store.value,
      show: false
    }
  }
  return { store, show, hide }
})
