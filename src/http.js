import axios from "axios"
import Vue from 'vue'
import router from "@/router"

const http = axios.create({
  baseURL: '//blog-server.hunger-valley.com/',
})
http.interceptors.request.use(config => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = localStorage.token
  }
  return config
}, error => {
  return Promise.reject(error)
})
http.interceptors.response.use(res => res, error => {
  if (error.response.status === 'fail') {
    Vue.prototype.$message({
      message: error.response.msg,
      type: "error"
    })
    router.push('/')
  }
  return Promise.reject(error)
})

export default http