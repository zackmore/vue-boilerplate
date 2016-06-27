<template>
<h2>Post</h2>
<router-view></router-view>
</template>

<script>
import { getPost } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      post: state => state.postdetail.post
    },

    actions: {
      getPost
    }
  },

  route: {
    activate ({ next }) {
      this.getPost(this.$route.params.postid)
      next()
    }
  }
}
</script>
