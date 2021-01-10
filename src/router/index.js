import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
// will add soon
import About from '../views/About.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]

const router = new VueRouter({
  routes
})

export default router
