import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import { indexOf } from 'core-js/fn/array'

Vue.use(ant)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token')
          /*     router.push('/views/login'); */
          router.replace({
            path: '/views/login',
            query: { redirect: router.currentRoute.fullPath }// 登录成功后跳入浏览的当前页面
          })
      }
    }
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
