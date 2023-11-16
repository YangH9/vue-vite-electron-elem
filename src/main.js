import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.min.js'

import ComponentIcons from '@/components/icons'

import 'element-plus/dist/index.css'

import './assets/main.css'

const app = createApp(App)

app
  .use(ElementPlus, { locale: zhCn })
  .use(createPinia())
  .use(router)
  .use(ComponentIcons)
  .mount('#app')
