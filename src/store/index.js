import Vue from 'vue'
import Vuex from 'vuex'
import author from './modules/author'
import blog from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    author,
    blog
  }
})
