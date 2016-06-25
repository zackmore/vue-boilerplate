import Homepage from './components/Homepage'
import NormalPage from './components/Normalpage'

import ResourcesPage from './components/Resources'
import ResourceList from './components/Resources/resource.list'
import ResourceDetail from './components/Resources/resource.detail'
import ResourceNew from './components/Resources/resource.new'

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

    '/resources': {
      name: 'resources',
      component: ResourcesPage,

      subRoutes: {
        '/': {
          name: 'resourcelist',
          component: ResourceList
        },

        '/new': {
          name: 'resourcenew',
          component: ResourceNew
        },

        '/:resourceid': {
          name: 'resourcedetail',
          component: ResourceDetail,

          subRoutes: {
            '/edit': {
              name: 'resourceedit',
              component: ResourceDetail
            }
          }
        }
      }
    }
  })
}
