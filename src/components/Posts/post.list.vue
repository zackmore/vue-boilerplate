<template>
<ul>
  <li v-for="post in posts">
    <a v-link="{ name: 'postdetail', params: { postid: post.id }}">{{ post.title }} </a>
    <br>
    <button>Edit</button>
    <button>Delete</button>
  </li>
</ul>
</template>

<script>
import { getPosts } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      posts: state => state.postlist.posts
    },

    actions: {
      getPosts
    }
  },

  created () {
    this.getPosts()
  }
}
</script>
