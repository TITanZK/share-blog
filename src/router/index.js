import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/Detail.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/pages/Edit.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/pages/Create.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/User.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/pages/My.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
