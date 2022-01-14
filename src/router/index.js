/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-12 22:46:06
 * @LastEditTime: 2022-01-14 15:29:07
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  { path: '/login', component: () => import('@/views/login/index') },
  { path: '/', component: () => import('@/layout/index') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router
