import Vue from 'vue'
import Vuex from 'vuex'

import postlist from './modules/post.list'
import postdetail from './modules/post.detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postlist,
    postdetail
  }
})
