import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {
  withCredentials: true
}

/*
Vue.http.interceptors.push({
  request (request) {
    // Some global actions for request
    return request
  },

  response (response) {
    // Some global actions for response
    if (!response.ok) {
      console.error('fetch failed')
    }
    return response
  }
})
*/

export const PostsResource = Vue.resource(API_ROOT + 'posts')
