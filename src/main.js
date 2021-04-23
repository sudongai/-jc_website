import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

const defaultTitle = '简创公关'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')