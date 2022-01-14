/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-13 21:31:10
 * @LastEditTime: 2022-01-13 21:43:30
 * @LastEditors: Liu Shuai
 * @Reference:
 */

export const validatePassword = () => {
  return (rule, value, callback) => {
    console.log(value)
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
