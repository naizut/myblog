import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

Vue.use(ant)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

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

Vue.prototype.getCurrentFormattedTime = function() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;

  var seperator2 = ":"
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var seconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  var currenttime = hours + seperator2 + minutes + seperator2 + seconds;
  return currentdate + ' ' + currenttime;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
