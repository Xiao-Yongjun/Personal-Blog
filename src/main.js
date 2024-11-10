import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/reset.scss'
import './style/main.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)
app.use(ElementPlus);
app.use(ElementPlus, {
    locale: zhCn,
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.mount('#app')
