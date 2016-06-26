import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL
} from '../types'

const state = {
  posts: []
}

const mutations = {
  [GET_POSTS_SUCCESS] (state, action) {
    state.posts = action.posts
  },

  [GET_POSTS_FAIL] (state, action) {
  }
}

export default {
  state,
  mutations
}
