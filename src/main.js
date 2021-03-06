import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './element-variables.scss'
import '@common/font/iconfont.css'
import '@common/css/common.less'
import './assets/css/reset.css'
import util from '@util/common.js'
Vue.prototype.$util = util
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')