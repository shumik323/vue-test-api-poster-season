import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {path: '/:slug'}
    ]
  },
  {
    path: '/episodes/:slug/:id',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/EpisdoesDetail.vue')
  },
  {
    path: '/heroes/:slug',
    name: 'Heroes',
    component: () => import(/* webpackChunkName: "heroes" */ '../views/HeroesDetail.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
