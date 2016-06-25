<template>
  <div id="app">
    <h1>The Vue Boilerplate</h1>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import store from '../vuex/store'

export default {
  store,
  components: {
    Sidebar
  }
}
</script>

<style></style>
