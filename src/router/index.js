import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MyAnimeView from '../views/MyAnimeVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/MyAnimeView',
    name: 'MyAnimeView',
    component: MyAnimeView
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/personalInfo/:id',
    name: 'personalinfo',
    component: personalinfo,
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
