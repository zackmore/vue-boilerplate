<template>
<post-form v-bind:post="post" v-bind:type="'edit'"></post-form>
</template>

<script>
import PostForm from './form'

export default {
  vuex: {
    getters: {
      post: state => state.postdetail.post
    }
  },

  components: {
    PostForm
  }
}
</script>
