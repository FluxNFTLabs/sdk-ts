// plugins/global-components.js
import { defineNuxtPlugin } from '#app'
import BaseButton from './components/button/index.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BaseButton', BaseButton)
})
