import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'element-plus/dist/index.css'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus, {
        locale: zhCn,
    })
    
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: 100,
        current: 0,
    })
})

// https://www.jjjchat.com/article/1588848025554399232
// https://blog.csdn.net/m0_48489737/article/details/127325786
// https://www.jianshu.com/p/3d1fa62a98f7