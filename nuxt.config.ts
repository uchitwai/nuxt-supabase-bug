import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [ '@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', '@nuxtjs/supabase' ],
  css: [ '~/assets/css/common.css', ],
  vite: {
    plugins: [ tailwindcss(), ],
  },
  devServer: {
    port: 9991,
  },
  supabase: {
    redirect: false,
    types: '../shared/types/database.types.ts'
  },
})
