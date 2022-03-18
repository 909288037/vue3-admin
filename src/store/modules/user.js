/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 10:15:37
 * @LastEditTime: 2022-01-15 14:26:57
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { login as _login, getUserInfo } from '@/api/sys.js'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage.js'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    async getUserInfo(context, userInfo) {
      const res = await getUserInfo()
      context.commit('setUserInfo', res)
      return res
    },
    // 退出
    async logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
