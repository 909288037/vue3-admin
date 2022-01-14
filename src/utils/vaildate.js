/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-13 16:56:10
 * @LastEditTime: 2022-01-13 16:59:36
 * @LastEditors: Liu Shuai
 * @Reference:
 */

/**
 * 判断是否外部资源
 * @param {*} path
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
