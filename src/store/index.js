import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      caseList: [], // 案例列表
      casePosition: '', // 当前案例索引
      caseLen: '', // 案例长度
      pageTitle:'' // XX详情
    },
    mutations: {
      setCaseList (state, payload) {
        state.caseList = payload
      },
      setCasePosition (state, payload) {
        state.casePosition = payload
      },
      setCaseLen (state, payload) {
        state.caseLen = payload
      },
      setPageTitle(state, payload) {
        state.pageTitle = payload
      }
    },
    actions: {}
})