/*
 * @Desc: 
 * @FilePath: \jc_website\src\$http\index.js
 * @Author: liujianwei1
 * @Date: 2021-05-14 01:33:53
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import util from '@util/common'
let service = axios.create() // 自定义 axios 实例
service.defaults.timeout = 3000 // 设置超时时间
service.defaults.baseURL = process.env.VUE_APP_URL // 设置基本地址

// 请求拦截器
service.interceptors.request.use(
  // 请求前的处理
  config => {
    if (Object.prototype.toString.call(config.data) === '[object FormData]') {
      return config
    }
    const time = new Date().getTime()
    const sortParams = util.sortObjKey({
      ...config.data,
      time,
      source: 'jianc'
    })
    const sign = util.getSign(sortParams)
    config.data = Object.assign({}, { ...sortParams }, { sign })
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  // 请求错误处理
  err => {
    return Promise.reject(err)
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
    return Promise.reject(err)
  }
)

export default service