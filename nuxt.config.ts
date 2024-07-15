// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
  ],
  plugins: [
    '~/plugins/game_plugin.ts'
  ],
  imports: {
    dirs: ["stores"]
  },
  css: ["@/assets/styles/main.css"],

})
