import Homepage from './components/Homepage'
import NormalPage from './components/Normalpage'

import PostsPage from './components/Posts'
import PostList from './components/Posts/post.list'
import PostDetail from './components/Posts/post.detail'
import PostNew from './components/Posts/post.new'
import PostEdit from './components/Posts/post.edit'

export default function (router) {
  router.map({
    '/': {
      name: 'homepage',
      component: Homepage
    },

    '/page': {
      name: 'normalpage',
      component: NormalPage
    },

    '/posts': {
      name: 'postspage',
      component: PostsPage,

      subRoutes: {
        '/': {
          name: 'postlist',
          component: PostList
        },

        '/new': {
          name: 'postnew',
          component: PostNew
        },

        '/:postid': {
          name: 'postdetail',
          component: PostDetail,

          subRoutes: {
            '/edit': {
              name: 'postedit',
              component: PostEdit
            }
          }
        }
      }
    }
  })
}
