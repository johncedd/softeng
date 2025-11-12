import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
