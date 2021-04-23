import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import module1 from './module/module1/index.js'
import module2 from './module/module2/index.js'

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      module1,
      module2
    }
})