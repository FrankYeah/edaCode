// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
    typescript: {
        typeCheck: true
    },
    css: [
      "@/assets/css/font.css"
     ],
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: ''
          }
        }
      }
    },
    i18n: {
        defaultLocale: 'zh',
        langDir: 'locales',
        locales: [
          { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
          { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
        ],
        strategy: 'no_prefix',
        vueI18n: {
          legacy: false
        }
    }
})
