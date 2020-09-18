import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
  getters: {
    userInfo (state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },
  mutations: {
    changeLogin: (state, data) => {
      if (data.rememberMe) {
        localStorage.token = data.token
      } else {
        sessionStorage.token = data.token
      }

      state.token = data.token
      localStorage.setItem('token', data.token)
    },
    changeLogout: (state) => {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      state.token = null
    }
  }
  // actions: {

  // }
})
