import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL
} from '../types'

const state = {
  posts: []
}

const mutations = {
  [GET_POSTS_SUCCESS] (state, action) {
    state.posts = action.posts
  },

  [GET_POSTS_FAIL] (state, action) {
  },

  [DELETE_POST_SUCCESS] (state, action) {
    window.alert('Delete success!')
  },

  [DELETE_POST_FAIL] (state, action) {
    window.alert('Delete fail!')
  }
}

export default {
  state,
  mutations
}
