import author from '@/api/author'

const state = {
  user: null,
  isLogin: false,
  buttonVisible: true
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin,
  buttonVisible: state => state.buttonVisible
}

const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  },
  setUser(state, payload) {
    state.user = payload.user
  },
  setButtonVisible(state, value) {
    state.buttonVisible = value
  }
}

const actions = {
  async toLogin({ commit }, payload) {
    try {
      const res = await author.login(payload)
      commit('setLogin', { isLogin: true })
      commit('setUser', { user: res.data })
      return res
    } catch (error) {
      return error
    }
  },
  async checkLogin({ commit, state }) {
    if (state.isLogin) return true  // 登录状态返回 true  取消请求
    const res = await author.getInfo()
    if (res.status === 'fail' && res.msg === '请先登录') {  // 未登录
      commit('setLogin', { isLogin: false })
      return false
    }
    commit('setLogin', { isLogin: res.isLogin })
    commit('setUser', { user: res.data })
    return true
  },
  async toLogout({ commit }) {
    const res = await author.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
    return res
  },
  async toRegister({ commit }, payload) {
    try {
      const res = await author.register(payload)
      commit('setUser', { user: res.data })
      commit('setLogin', { isLogin: true })
      return res
    } catch (error) {
      return error
    }
  }
}

export default { state, getters, mutations, actions }