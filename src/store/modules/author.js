import author from '@/api/author'

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

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
  },
  async checkLogin({commit}) {
    const res = await author.getInfo()
    commit('setLogin', {isLogin: res.isLogin})
    commit('setUser', {user: res.data})
  },
  async logout({commit}){
    await author.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  }
}

export default {state, getters, mutations, actions}