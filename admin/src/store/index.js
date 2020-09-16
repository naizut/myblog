import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    login: (state, data) => {
      if (data.rememberMe) {
        localStorage.token = data.token
      } else {
        sessionStorage.token = data.token
      }

      state.token = data.token
    },
    logout: (state) => {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      state.token = null
    }
  },
  actions: {

  }
})
