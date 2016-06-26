import {
  PostsResource
} from './resources'

export default {
  getPosts () {
    return PostsResource.get()
  },

  getPost (postid) {
    return PostsResource.get({ postid })
  }
}
