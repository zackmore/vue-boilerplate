<template>
<strong>
{{ type | json }}
</strong>
<form>
  <input type="text" v-model="post.title">
  <br>
  <textarea cols="20" rows="20" v-model="post.body"></textarea>
  <br>
  <div v-if="type=='edit'">
    <input type="submit" value="Update" v-on:click.prevent="update">
  </div>
  <div v-else>
    <input type="submit" value="Create" v-on:click.prevent="create">
  </div>
</form>
</template>

<script>
import { createPost, updatePost } from '../../vuex/actions'

export default {
  props: {
    post: {
      type: Object,
      default () { return { title: '', body: '' } }
    },

    type: {
      type: String,
      default () { return 'new' }
    }
  },

  vuex: {
    actions: {
      createPost,
      updatePost
    }
  },

  methods: {
    update () {
      this.updatePost(this.post.id, JSON.parse(JSON.stringify(this.post)))
    },

    create () {
      this.createPost(JSON.parse(JSON.stringify(this.post)))
    }
  }
}
</script>
