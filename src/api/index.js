import {
  PostsResource
} from './resources'

export default {
  getPosts () {
    return PostsResource.get()
  }
}
