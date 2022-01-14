/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-13 21:00:10
 * @LastEditTime: 2022-01-14 11:57:58
 * @LastEditors: Liu Shuai
 * @Reference:
 */

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 代理

  devServer: {
    proxy: {
      // 当地址中包含 /api
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true
      }
    }
  },

  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  }
}
