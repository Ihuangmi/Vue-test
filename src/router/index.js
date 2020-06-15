import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index/userinfo' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      { path: '/index/userinfo', component: () => import('../components/userinfo') },
      { path: '/index/correlation', component: () => import('../components/correlation') },
      { path: '/index/signalman', component: () => import('../components/signalman') },
      { path: '/index/following', component: () => import('../components/following') },
      { path: '/index/exemple', component: () => import('../components/exemple') }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
