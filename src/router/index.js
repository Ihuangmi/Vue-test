import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    hiden: true,
    component: () => import('@/views/login')
  },
  { 
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      meta: { title: '首页' }
    }]
  },
  { 
    path: '/risk',
    component: Layout,
    redirect: '/risk/link-account',
    meta: { title: '风险助手' },
    children: [{
      path: 'link-account',
      name: 'link-account',
      component: () => import('@/views/risk/link-account'),
      meta: { title: '账户关联' }
    },
    {
      path: 'risk-exposure',
      name: 'risk-exposure',
      component: () => import('@/views/risk/risk-exposure'),
      meta: { title: '风险敞口' }
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
