import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Layout,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About.vue'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/articles',
          name: 'articles',
          component: () => import('@/views/articles/Index.vue'),
          children: [
            {
              path: 'list',
              name: 'list',
              component: () => import('@/views/articles/List.vue')
            },
            {
              path: 'create',
              name: 'create',
              component: () => import('@/views/articles/Create.vue')
            },{
              path: 'detail/:id',
              name: 'detail',
              component: () => import('@/views/articles/Detail.vue'),
            },{
              path: 'update/:id',
              name: 'update',
              component: () => import('@/views/articles/Update.vue')
            }
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/views/Logout.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' || !to.meta.requireAuth) {
    next()
  } else {
    if (!store.state.token) {
      next({
        name: 'login',
        query: { redirect: from.fullPath }
      })
    } else {
      next()
    }
  }
})

export default router
