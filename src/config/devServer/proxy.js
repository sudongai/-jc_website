module.exports = {
  '/Cases': {
    target: process.env.VUE_APP_URL, // 目标代理服务器地址
    changeOrigin: true, // 允许跨域
    ws: true, // 开启WebSocket
    pathRewrite: {
    }
  },
  '/News': {
    target: process.env.VUE_APP_URL, // 目标代理服务器地址
    changeOrigin: true, // 允许跨域
    ws: true, // 开启WebSocket
    pathRewrite: {
    }
  }
}
