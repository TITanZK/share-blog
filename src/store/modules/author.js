// import axios from 'axios'

const state = {
  user: null,
  isLogin: false
}
const getters = {}
const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}
const actions = {
  // login({commit}, {username, password}) {
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  //
  //   commit('setLogin', {isLogin:true})
  //   console.log(res)
  // }
}

export default {state, getters, mutations, actions}