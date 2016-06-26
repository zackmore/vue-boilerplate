<template>
<h3>The Post Detail</h3>
<table>
  <tr>
    <td align="right"><b>ID</b></td>
    <td>{{ post.id }}</td>
  </tr>
  <tr>
    <td align="right"><b>UserID</b></td>
    <td>{{ post.userId }}</td>
  </tr>
  <tr>
    <td align="right"><b>Title</b></td>
    <td>{{ post.title }}</td>
  </tr>
  <tr>
    <td align="right"><b>Body</b></td>
    <td>{{ post.body }}</td>
  </tr>
</table>
</template>

<script>
import { getPost } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      post: state => { console.log(state); return state.postdetail.post }
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
