/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-12 22:46:06
 * @LastEditTime: 2022-01-13 17:00:19
 * @LastEditors: Liu Shuai
 * @Reference:
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
