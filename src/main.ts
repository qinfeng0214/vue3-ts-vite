/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:42:39
 * @LastEditors: yft
 * @LastEditTime: 2022-08-24 17:50:54
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
