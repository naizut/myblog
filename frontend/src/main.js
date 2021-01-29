import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Antd from 'ant-design-vue'
import 'ant-design-vue/lib/input/style/css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
