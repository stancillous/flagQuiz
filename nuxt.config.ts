// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },

  app:{
    head: {
      title: "Country Flag Quiz",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Test your knowledge of world flags with the Country Flag Quiz!' },
        { property: 'og:title', content: 'Country Flag Quiz' },
        { property: 'og:description', content: 'Test your knowledge of world flags with the Country Flag Quiz!' },
        { property: 'og:image', content: 'https://thumbs.dreamstime.com/b/muitas-bandeiras-de-v%C3%A1rios-estados-como-s%C3%ADmbolo-da-coopera%C3%A7%C3%A3o-mundial-pavilh%C3%B5es-dos-pa%C3%ADses-do-mundo-sobre-as-que-piscam-o-224354603.jpg' },
        { property: 'og:url', content: 'https://globalcommunity.app/' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Country Flag Quiz' },
        { name: 'twitter:description', content: 'Test your knowledge of world flags with the Country Flag Quiz!' },
        { name: 'twitter:image', content: 'https://thumbs.dreamstime.com/b/muitas-bandeiras-de-v%C3%A1rios-estados-como-s%C3%ADmbolo-da-coopera%C3%A7%C3%A3o-mundial-pavilh%C3%B5es-dos-pa%C3%ADses-do-mundo-sobre-as-que-piscam-o-224354603.jpg' },
      ]
    },
  
  },


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
