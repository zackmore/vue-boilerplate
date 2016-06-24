

export default function(router) {
  router.map({
    '/': {
      name: 'homepage'
    },

    '/page': {
      name: 'normalpage'
    },

    '/resources': {
      subRoutes: {
        '/': {
          name: 'resourcelist'
        },
        
        '/new': {
          name: 'resourcenew'
        },

        '/:resourceid': {
          subRoutes: {
            '/': {
              name: 'resourcedetail'
            },

            '/edit': {
              name: 'resourceedit'
            },
          }
        },
      }
    },
  })
}
