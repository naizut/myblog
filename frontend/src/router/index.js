import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/home",
      component: () => import("@/layout"),
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("@/views/Home")
        },
        {
          path: "blog",
          name: "Blog",
          component: () => import("@/views/blog/Index")
        },
        {
          path: "blog/:id",
          name: "BlogDetail",
          component: () => import("@/views/blog/Detail")
        },
        {
          path: "about",
          name: "About",
          component: ()=>import("@/views/About"),
          meta: {
            title: 'About'
          }
        },
        {
          path: "search",
          name: "Search",
          component: ()=>import("@/views/Search")
        }
      ]
    },
  ]
});

export default router;
