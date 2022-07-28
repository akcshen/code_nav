import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import router from './router'
import SvgIcon from '@/icons'
import store from './store'
const app = createApp(App).use(store)
SvgIcon(app)
app.use(ElementPlus).use(router).use(createPinia()).mount('#app')
