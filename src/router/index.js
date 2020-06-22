import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    hiden: true,
    component: () => import('@/views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [{
      path: '/home',
      component: () => import('@/views/home'),
      // meta: { title: '首页' }
    }]
  },
  {
    path: '/risk',
    component: Layout,
    meta: { title: '风险助手' },
    children: [{
      path: '/risk/link-account',
      name: 'link-account',
      component: () => import('@/views/risk/link-account'),
      meta: { title: '账户关联' }
    },
    {
      path: '/risk/risk-exposure',
      name: 'risk-exposure',
      component: () => import('@/views/risk/risk-exposure'),
      meta: { title: '风险敞口' }
    }]
  },
  {
    path: '/myclipc',
    component: Layout,
    meta: { title: '我的KlipC' },
    children: [{
      path: '/myclipc/trader-profile',
      name: 'trader-profile',
      component: () => import('@/views/myclipc/trader-profile'),
      meta: { title: '我的主页' }
    },
    {
      path: '/myclipc/user-profile',
      name: 'user-profile',
      component: () => import('@/views/myclipc/user-profile'),
      meta: { title: '跟单详情' }
    }]
  },
  {
    path: '/login',
    name: 'logout',
    component: () => import('@/views/login'),
    meta: { title: '注销登录' }
  },
]

const router = new VueRouter({
  routes
})

export default router
