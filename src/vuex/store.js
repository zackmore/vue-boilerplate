import Vue from 'vue'
import Vuex from 'vuex'

import resourcelist from './modules/resource.list'
import resourcedetail from './modules/resource.detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    resourcelist,
    resourcedetail
  }
})
