import {
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL
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
  },

  [CREATE_POST_SUCCESS] (state, action) {
    window.alert('Create Success!')
  },

  [CREATE_POST_FAIL] (state, action) {
    window.alert('Create Fail!')
  },

  [UPDATE_POST_SUCCESS] (state, action) {
    window.alert('Update Success!')
  },

  [UPDATE_POST_FAIL] (state, action) {
    window.alert('Update Fail!')
  }
}

export default {
  state,
  mutations
}
