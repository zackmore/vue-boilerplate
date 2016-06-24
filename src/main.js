import Vue from 'vue'
import VueRouter from 'vue-router'
import configureRoute from './routes'
import { sync } from 'vuex-router-sync'
import sotre from './vuex/store'
import App from './components/App'

Vue.use(VueRouter)
//Vue.config.devtools = true

const router = new VueRouter({
  saveScrollPosition: true
})
configureRoute(router)
sync(store, router)

router.start(Vue.extend(App), 'app')
window.router = router
