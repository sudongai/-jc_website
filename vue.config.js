const path = require('path')
module.exports = {
  configureWebpack: config => {
    config.resolve = {
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