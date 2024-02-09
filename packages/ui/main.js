// plugins/global-components.js
import { defineNuxtPlugin } from '#app'
import BaseButton from './components/Button/index.vue'
import BaseTextField from './components/TextField/index.vue'
import BaseTooltip from './components/Tooltip/index.vue'
import BaseChip from './components/Chip/index.vue'
import BaseSnackbar from './components/Snackbar/index.vue'
import BaseTabs from './components/Tabs/index.vue'
import BaseModal from './components/Modal/index.vue'
import BaseCheckbox from './components/Checkbox/index.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BaseButton', BaseButton)
  nuxtApp.vueApp.component('BaseTextField', BaseTextField)
  nuxtApp.vueApp.component('BaseTooltip', BaseTooltip)
  nuxtApp.vueApp.component('BaseChip', BaseChip)
  nuxtApp.vueApp.component('BaseSnackbar', BaseSnackbar)
  nuxtApp.vueApp.component('BaseTabs', BaseTabs)
  nuxtApp.vueApp.component('BaseModal', BaseModal)
  nuxtApp.vueApp.component('BaseCheckbox', BaseCheckbox)
})
