import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main/Home/Home.vue'
import Main from '../views/Main/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
