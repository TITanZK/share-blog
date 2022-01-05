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
      console.log(res.data)
      if (res.data.status === 'ok') {
        if (res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      } else {
        Vue.prototype.$message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(() => {
      Vue.prototype.$message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}

export default request