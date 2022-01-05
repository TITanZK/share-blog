import axios from "axios"
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'

const request = (url, type = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    let option = {url, method: type}
    type.toLowerCase() === 'get' ? option.params = data : option.data = data
    if (localStorage.token) { //验证 token
      axios.defaults.headers.common['Authorization'] = localStorage.token
    }
    axios(option).then(res => {
      if (res.data.status === 'ok' && res.data.token) {
        localStorage.token = res.data.token
        resolve(res.data)
      } else if (res.statusText === 'OK') {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(() => {
      Vue.prototype.$message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}

export default request