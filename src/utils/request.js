/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 09:53:49
 * @LastEditTime: 2022-01-15 18:03:32
 * @LastEditors: Liu Shuai
 * @Reference:
 */

import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

const sevice = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
sevice.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效了'))
      }
      config.headers.Authorization = 'Bearer ' + store.getters.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
sevice.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 判断当前请求是否成功
    if (success) {
      // 成功返回解析后的数据
      return data
    } else {
      // 失败 （请求成功、业务失败），消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    // token 失效
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default sevice
