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

export const createPost = ({ dispatch }, newpost) => {
  api.createPost(newpost).then(response => {
    dispatch(types.CREATE_POST_SUCCESS)
  }, response => {
    dispatch(types.CREATE_POST_FAIL)
  })
}

export const updatePost = ({ dispatch }, postid, newpost) => {
  api.createPost(postid, newpost).then(response => {
    dispatch(types.UPDATE_POST_SUCCESS, { post: response.data })
  }, response => {
    dispatch(types.UPDATE_POST_FAIL)
  })
}

export const deletePost = ({ dispatch }, postid) => {
  api.deletePost(postid).then(response => {
    dispatch(types.DELETE_POST_SUCCESS)
  }, response => {
    dispatch(types.DELETE_POST_FAIL)
  })
}
