import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  },
  {
    path: '/occupation',
    name: 'occupation',
    component: () => import(/* webpackChunkName: "occupation" */ '../views/Occupation.vue'),
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
