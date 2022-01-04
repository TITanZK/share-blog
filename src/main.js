import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "@/http"

import {Button, Input, Switch, Form, FormItem, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$message = Message;

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
