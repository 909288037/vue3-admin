/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-15 16:51:52
 * @LastEditTime: 2022-01-15 17:09:25
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  return setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now()

  // 缓存时间
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
