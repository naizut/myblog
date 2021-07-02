import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: () => import('@/layout'),
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/about')
        },
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home')
        },
        {
          path: '/blog',
          name: 'Blog',
          component: () => import('@/views/blog/index')
        },
        {
          path: '/blog/:id',
          name: 'BlogDetail',
          component: () => import('@/views/blog/detail')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('@/views/contact'),
          meta: {
            title: 'Contact me'
          }
        },
        {
          path: 'tools/list',
          name: 'Tools',
          component: () => import('@/views/tools/index'),
          meta: {
            title: 'Tools'
          }
        },
        {
          path: 'tools',
          redirect: '/tools/list',
          component: { render: c => c('router-view') },
          children: [
            {
              path: 'to-do-list',
              name: 'ToDoList',
              component: () => import('@/views/tools/to-do-list')
            }
          ]
        },
        {
          path: 'search',
          name: 'Search',
          component: () => import('@/views/search')
        }
      ]
    },

    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/test')
    }
  ]
})

export default router
