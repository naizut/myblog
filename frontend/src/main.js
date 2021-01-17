import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { Input } from "ant-design-vue";
import 'ant-design-vue/lib/input/style/css'
Vue.use(Input)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

