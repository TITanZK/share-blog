import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

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
    path: '/detail/:blogId',
    name: 'Detail',
    component: () => import('@/pages/Detail.vue')
  },
  {
    path: '/edit/:blogId',
    name: 'Edit',
    component: () => import('@/pages/Edit.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/pages/Create.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:userId',
    name: 'User',
    props: true,
    component: () => import('@/pages/User.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/pages/My.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) { // 没登录重定向
        next({ path: '/login', query: { redirect: to.fullPath } })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
