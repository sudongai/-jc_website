const path = require('path')
const devServer = require('./src/config/devServer/index')
const chainWebpack = require('./src/config/chainWebpack/index')
const configureWebpack = require('./src/config/configureWebpack/index')
const publicPathsMap = {
  development: './',
  production: './'
}
module.exports = {
  publicPath: publicPathsMap[process.env.NODE_ENV] || '', // 改配置生效后，打包后的包可放在服务器下任何文件夹内
  productionSourceMap: false, // 生产环境是否生成sourceMap文件
  lintOnSave: true, // 代码保存时进行eslint检测
  devServer, // 关于服务配置
  chainWebpack,
  configureWebpack
}