const colors = require('colors')
const proxy = require('./proxy')

// 输入日志
console.log(colors.rainbow('\n =========接口代理列表 start========='))

console.log(colors.rainbow('=========接口代理列表 end========= \n'))


module.exports = {
  open: true, // 自动打开浏览器
  host: '0.0.0.0', // 设置为0.0.0.0则所有的地址均能访问 localhost
  port: 8080, // 配置端口号
  proxy, // 设置代理
  https: false,
  hotOnly: false, // 热更新
  before: app => {},
  overlay: {
    warnings: false,
    errors: false,
  },
}
