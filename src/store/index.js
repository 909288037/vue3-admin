/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-12 22:46:06
 * @LastEditTime: 2022-01-14 15:39:11
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: {
    user
  }
})
