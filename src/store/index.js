import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: sessionStorage.getItem('storeState') ? JSON.parse(sessionStorage.getItem('storeState')) : {
        screenWidth:  document.documentElement.clientWidth,
          //屏幕宽度
            screenHeight:  document.documentElement.clientHeight,
          //屏幕高度
        caseList: [], // 案例列表
        newsList: [], // 新闻列表
        caseIndex: Number, // 当前案例索引
        newsIndex: Number, // 当前新闻索引
    },
    mutations: {
        setCaseList(state, payload) {
            state.caseList = payload
        },
        setNewsList(state, payload) {
            state.newsList = payload
        },
        setCaseIndex(state, payload) {
            state.caseIndex = +payload
        },
        setNewsIndex(state, payload) {
            state.newsIndex = +payload
        }
    },
    actions: {}
})