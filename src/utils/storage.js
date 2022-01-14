/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 14:11:15
 * @LastEditTime: 2022-01-14 14:14:17
 * @LastEditors: Liu Shuai
 * @Reference:
 */

/**
 * 存储数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除指定数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = (key) => {
  window.localStorage.clear()
}
