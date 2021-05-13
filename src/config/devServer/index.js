const colors = require('colors')
const proxy = require('./proxy')

// 输入日志
console.log('当前环境变量为：' + colors.rainbow(process.env.VUE_APP_URL))

module.exports = {
    host: '0.0.0.0', // 主机 设置为0.0.0.0则所有的地址均能访问
    port: 80, // 端口
    open: true, // 自动打开浏览器
    https: false, // 是否启用https
    proxy, // 设置代理
    hotOnly: true, // 热更新
}