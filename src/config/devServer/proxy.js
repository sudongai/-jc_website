module.exports = {
  '/api': {
    target: 'https://www.baidu.com', // 目标代理服务器地址
    changeOrigin: true, // 允许跨域
    ws: true, // 开启WebSocket
    pathRewrite: {
      '/api': '' // 路径重写
    }
  }
}