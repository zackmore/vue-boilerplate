import {
  GET_POST_SUCCESS,
  GET_POST_FAIL
} from '../types'

const state = {
  post: {}
}

const mutations = {
  [GET_POST_SUCCESS] (state, action) {
    console.log(action)
    state.post = action.post
  },

  [GET_POST_FAIL] (state, action) {
  }
}

export default {
  state,
  mutations
}
