/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-12 22:46:06
 * @LastEditTime: 2022-01-15 10:02:58
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './permission'
const app = createApp(App)
installIcons(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
