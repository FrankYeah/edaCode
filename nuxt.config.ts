// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
    typescript: {
        typeCheck: true
    },
    css: [
      "@/assets/css/font.css"
     ],
    app: {
      baseURL: '/eda/',
      head: {
        title: '義大專業醫療團隊',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: '義大專業醫療團隊',
            name: '義大專業醫療團隊',
            content: '2023年本中心獲頒「國家生技醫療品質獎」殊榮，您有任何問題，親切的醫師都在診所為您服務，四位醫師＋個管師＋營養師的全方位照護，全心投入於外科手術減重，帶來更好的效果、降低風險與副作用，我們給您最舒適的住房體驗'
          },
          { hid: 'og:image' , property: 'og:image' , content: 'logo.png'},
        ],
        
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/eda/favicon.ico' }]
      }
    },
    
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
