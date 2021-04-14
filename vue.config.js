const path = require('path')
const devServer = require('./src/config/index')
module.exports = {
  devServer, // 关于服务配置
  configureWebpack: config => {
    config.resolve = {
      extensions: [
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm',
        '.ts',
        '.tsx'
      ],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@common': path.resolve(__dirname, 'src/assets'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@axios': path.resolve(__dirname, 'src/$http-config/index.js'),
        '@api': path.resolve(__dirname, 'src/$api-config/index.js')
      }
    }
  }
}