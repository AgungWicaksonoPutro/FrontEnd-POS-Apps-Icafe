import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main/Home/Home.vue'
import Main from '../views/Main/Index.vue'
import History from '../views/Main/History/History.vue'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/Home',
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: Login
      },
      {
        path: 'Home',
        name: 'Home',
        component: Home
      },
      {
        path: 'History',
        name: 'History',
        component: History
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
