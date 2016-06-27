<template>
<h3>The Posts List</h3>
<ul>
  <li v-for="post in posts">
    <a v-link="{ name: 'postdetail', params: { postid: post.id }}">{{ post.title }} </a>
    <br>
    <button v-link="{ name: 'postedit', params: { postid: post.id } }">Edit</button>
    <button v-on:click.prevent="deletePost(post.id)">Delete</button>
  </li>
</ul>
</template>

<script>
import { getPosts, deletePost } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      posts: state => state.postlist.posts
    },

    actions: {
      getPosts,
      deletePost
    }
  },

  route: {
    activate ({ next }) {
      this.getPosts()
      next()
    }
  }
}
</script>
