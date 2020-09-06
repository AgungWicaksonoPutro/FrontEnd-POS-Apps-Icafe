import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/Landing/LandingPage.vue'
import Home from '../views/Main/Home/Home.vue'
import Main from '../views/Main/Index.vue'
import History from '../views/Main/History/History.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Add from '../views/Main/Product/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/LandingPage',
    children: [
      {
        path: 'LandingPage',
        name: 'LandingPage',
        component: LandingPage
      },
      {
        path: 'Login',
        name: 'Login',
        component: Login
      },
      {
        path: 'Register',
        name: 'Register',
        component: Register
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
      },
      {
        path: 'Add',
        name: 'Add',
        component: Add
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
