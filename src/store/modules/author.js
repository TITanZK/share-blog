import author from '@/api/author'

const state = {
  user: null,
  isLogin: false
}
const getters = {}
const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  },
  setUser(state, payload) {
    state.user = payload.user
  }
}
const actions = {
  async login({commit}, payload) {
    const res = await author.login(payload)
    commit('setLogin', {isLogin: true})
    commit('setUser', {user: res.data})
    return res
  }
}

export default {state, getters, mutations, actions}