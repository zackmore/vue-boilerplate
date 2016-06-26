import api from '../api'
import * as types from './types'

export const getPosts = ({ dispatch }) => {
  api.getPosts().then(response => {
    dispatch(types.GET_POSTS_SUCCESS, { posts: response.data })
  }, response => {
    dispatch(types.GET_POSTS_FAIL)
  })
}

export const getPost = ({ dispatch }, postid) => {
  api.getPost(postid).then(response => {
    dispatch(types.GET_POST_SUCCESS, { post: response.data })
  }, response => {
    dispatch(types.GET_POST_FAIL)
  })
}
