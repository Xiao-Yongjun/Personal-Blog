import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/reset.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index.js'

const app=createApp(App)
app.use(ElementPlus);
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(router)
app.mount('#app')