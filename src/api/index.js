import {
  PostsResource
} from './resources'

export default {
  getPosts () {
    return PostsResource.get()
  },

  getPost (postid) {
    return PostsResource.get({ postid })
  },

  createPost (newpost) {
    return PostsResource.save()
  },

  updatePost (postid, newpost) {
    return PostsResource.update()
  },

  deletePost (postid) {
    return PostsResource.delete({ postid })
  }
}
