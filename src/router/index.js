import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '@/views/Movies.vue'
import Details from '@/views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/Details/:id',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
