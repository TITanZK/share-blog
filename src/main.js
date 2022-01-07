import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Input, Switch, Form, FormItem, Message, Pagination } from 'element-ui'

import formatDate from './utility.js'

Vue.use(formatDate)

Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
