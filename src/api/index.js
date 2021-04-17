import axios from '@axios'
export default {
  // 案例分类
  category (params) {
    return axios.post('/Cases/category', params)
  },
  // 案例列表
  caseList (params) {
    return axios.post('/Cases/caseList', params)
  },
  // 案例详情
  caseDetail (params) {
    return axios.post('/Cases/caseDetail', params)
  },
  // 新闻列表
  newsList (params) {
    return axios.post('/News/newsList', params)
  },
  // 新闻详情
  newsDetail (params) {
    return axios.post('/Cases/newsDetail', params)
  }
}