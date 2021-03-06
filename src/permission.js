/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 15:35:30
 * @LastEditTime: 2022-01-15 10:51:50
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import router from '@/router'
import store from '@/store'

// 白名单

const whiteList = ['/login']

/**
 *  路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 如果已登录，不允许进入login
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在
      if (!store.getters.hashUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    //  判断是否在白名单里 在通过否则登录页
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
