module.exports = {
  '/api': {
    target: '', // 目标代理服务器地址
    changeOrigin: true, // 允许跨域
    ws: true, // 开启WebSocket
    pathRewrite: {
      '/api': '' // 路径重写，以api开头的，定向到哪里
    }
  },
  '^/api': {
    target: '', // 目标代理服务器地址
    changeOrigin: true, // 允许跨域
    ws: true, // 开启WebSocket
    pathRewrite: {
      '/api': '' // 路径重写，以api开头的，定向到哪里
    }
  }
}