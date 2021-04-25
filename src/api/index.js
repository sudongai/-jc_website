import axios from '@axios'
export default {
  // 案例分类
  getCategory (params) {
    return axios.post('/Cases/category', params)
  },
  // 案例列表
  getCaseList (params) {
    return axios.post('/Cases/caseList', params)
  },
  // 案例详情
  getCaseDetail (params) {
    return axios.post('/Cases/caseDetail', params)
  },
  // 新闻列表
  getNewsList (params) {
    return axios.post('/News/newsList', params)
  },
  // 新闻详情
  getNewsDetail (params) {
    return axios.post('/Cases/newsDetail', params)
  }
}