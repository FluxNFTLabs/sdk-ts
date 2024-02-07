// plugins/global-components.js
import { defineNuxtPlugin } from '#app'
import BaseButton from './components/Button/index.vue'
import BaseTextField from './components/TextField/index.vue'
import BaseTooltip from './components/Tooltip/index.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BaseButton', BaseButton)
  nuxtApp.vueApp.component('BaseTextField', BaseTextField)
  nuxtApp.vueApp.component('BaseTooltip', BaseTooltip)
})
