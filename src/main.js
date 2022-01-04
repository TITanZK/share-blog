import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button,Input,Switch} from 'element-ui'
Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
