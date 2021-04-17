const colors = require('colors')
const proxy = require('./proxy')

// 输入日志
console.log(colors.rainbow('==================='))

module.exports = {
  host: '0.0.0.0', // 主机 设置为0.0.0.0则所有的地址均能访问
  port: 8080, // 端口
  open: true, // 自动打开浏览器
  https: false, // 是否启用https
  proxy, // 设置代理
  hotOnly: true, // 热更新
  before: app => {},
  overlay: { // 错误、警告在页面弹出
    warnings: false,
    errors: false,
  },
}
