/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:42:39
 * @LastEditors: yft
 * @LastEditTime: 2022-11-02 15:38:44
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//  全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(store)
app.use(router)
app.mount('#app')
