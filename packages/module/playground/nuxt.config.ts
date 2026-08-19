import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['hui-nuxt'],
  hui: {
    prefix: 'Ui',
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-04',
})
