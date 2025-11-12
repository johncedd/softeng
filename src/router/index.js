import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Home from '../pages/Home.vue';

const routes = [
  // Open Home.vue on root path
  { path: '/', component: Home },

  // Auth pages
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },

  // Optional: keep /home route if you want
  { path: '/home', component: Home },

  // Optional: catch-all redirect to Home
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
