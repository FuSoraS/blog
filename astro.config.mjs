import { defineConfig } from 'astro/config'
import pagefind from 'astro-pagefind'

export default defineConfig({
  site: 'https://FuSoraS.github.io',
  base: 'blog',

  integrations: [
    pagefind(),
  ]
})