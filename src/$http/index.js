import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
let service = axios.create() // 自定义 axios 实例
service.defaults.timeout = 2500 // 设置超时时间
// 各模式下的baseURL
if (process.env.Node_ENV === 'production') { // 生产环境
  service.defaults.baseURL = process.env.VUE_APP_BASEURL // 设置基本地址
} else if (process.env.Node_ENV === 'development') { // 开发环境
  service.defaults.baseURL = process.env.VUE_APP_BASEURL // 设置基本地址
} else { // 测试环境
  service.defaults.baseURL = process.env.VUE_APP_BASEURL // 设置基本地址
}

// 请求拦截器
service.interceptors.request.use(
  // 请求前的处理
  config => {
    console.log(config)
    // if (Object.prototype.toString.call(config.data) === '[object FormData]') {
    //   return config
    // }
    // if (config.method === 'post' && config.url !== '/api/appeal/lists' && config.url !== '/api/appeal/stash' && config.url !== '/api/file/upload' && config.url !== '/api/appeal/completed' && config.url !== '/api/appeal/turnOver' && config.url !== '/api/sms/phoneImport') {
    //   config.data = qs.stringify(config.data)
    // }
    // return config
  },
  // 请求错误处理
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  // 响应数据处理
  res => {
    if (res.data.code === 200) {
      return res.data.content
    } else {
      Message.closeAll()
      Message({
        showClose: true,
        message: res.data.msg || '网络异常，请稍后重试！',
        type: 'error',
        duration: 1500
      })
      return Promise.reject(res.data)
    }
  },
  // 响应错误处理
  err => {
    Message.closeAll()
    Message({
      showClose: true,
      message: '网络异常，请重试',
      type: 'error',
      duration: 1500
    })
    return Promise.reject(error)
  }
)

export default service
