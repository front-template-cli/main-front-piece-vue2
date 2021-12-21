/*
 * @Author: 常竣
 * @Date: 2021-12-18 12:13:59
 * @LastEditTime: 2021-12-21 09:44:24
 * @LastEditors: Please set LastEditors
 * @Description: 项目配置文件
 * @FilePath: /main-front-piece-vue2/vue.config.js
 */
const path = require('path')
const projectInfo = require('./project-info')
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = projectInfo.label
      return args
    })
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(path.resolve('./src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        additionalData: `
        @import "@/styles/kd-ui-default.less";
      `
      }
    }
  },
  devServer: {
    port: '8099',
    hot: true,
    open: true,
    https: false,
    proxy: {
      '/coudMusicApi': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/coudMusicApi': '/'
        }
      }
    }
  }
}
