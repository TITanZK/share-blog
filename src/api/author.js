import request from "@/http"

export default {
  login({username, password}) {
    return request('/auth/login', 'POST', {username, password})
  },

  register({username, password}) {
    return request('/auth/register', 'POST', {username, password})
  },

  logout() {
    localStorage.removeItem('token')
    return request('/auth/logout')
  },

  getInfo() {
    return request('/auth')
  }
}