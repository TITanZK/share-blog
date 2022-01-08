import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Index from '@/pages/Index'
/*
*         重复触发了同一个路由
* vue-router在3.1之后把$router.push()方法改为了Promise
* 因此在使用$router.push()时如果没有处理错误回调函数，错误就会被路由全局错误处理捕获。
* */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
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
  // header 组件的按钮是否隐藏
  if (to.path === '/login' || to.path === '/register') {
    store.commit('setButtonVisible', false)
  } else {
    store.commit('setButtonVisible', true)
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      // 没登录重定向
      !isLogin ? next({ path: '/login', query: { redirect: to.fullPath } }) : next()
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
