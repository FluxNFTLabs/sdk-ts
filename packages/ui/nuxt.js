import { join } from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: join(import.meta.url, 'components'),
        prefix: 'base'
      })
    }
  }
})
