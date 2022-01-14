/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 10:15:37
 * @LastEditTime: 2022-01-14 15:30:36
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { login as _login } from '@/api/sys.js'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage.js'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    //  登录请求动作
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        _login({ username, password: md5(password) })
          .then((res) => {
            context.commit('setToken', res.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
