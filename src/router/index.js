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
    redirect: '/home',
    name: 'home',
    component: Layout,
    meta: { title: '首页' },
    children: [{
      path: '/home',
      component: () => import('@/views/home'),
    }]
  },
  {
    path: '/risk',
    component: Layout,
    meta: { title: '封装' },
    children: [{
      path: 'link-account',
      name: 'link-account',
      component: () => import('@/views/risk/link-account'),
      meta: { title: 'slot' }
    },
    {
      path: 'risk-exposure',
      name: 'risk-exposure',
      component: () => import('@/views/risk/risk-exposure'),
      meta: { title: 'table' }
    },
    {
      path: 'table',
      name: 'table',
      component: () => import('@/views/risk/table'),
      meta: { title: '表格封装' }
    },
  ]
  },
  {
    path: '/study',
    component: Layout,
    meta: { title: '目录2' },
    children: [{
      path: 'trader-profile',
      name: 'trader-profile',
      component: () => import('@/views/study/trader-profile'),
      meta: { title: '目录2-1' }
    },
    {
      path: 'user-profile',
      name: 'user-profile',
      component: () => import('@/views/study/user-profile'),
      meta: { title: '目录2-2' }
    }]
  },
  {
    path: '/login',
    name: 'logout',
    component: () => import('@/views/login'),
    meta: { title: '退出' }
  },
]

const router = new VueRouter({
  routes
})

export default router
