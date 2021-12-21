import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
const asyncRoutes: Array<any> = [
  {
    name: 'default',
    path: '/',
    redirect: '/home'
  },
  {
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    name: '首页',
    path: '/home'
  }
]
const routes: Array<RouteConfig> = [...asyncRoutes]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router
