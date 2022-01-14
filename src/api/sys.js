/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 10:10:44
 * @LastEditTime: 2022-01-14 10:12:19
 * @LastEditors: Liu Shuai
 * @Reference:
 */
import request from '@/utils/request'

/**
 * 登录
 */

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
