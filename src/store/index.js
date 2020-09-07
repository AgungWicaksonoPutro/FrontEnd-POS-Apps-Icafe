import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setAllProducts (state, payload) {
      state.products = payload
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    getAllProducts (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3400/api/v1/icafe/product')
          .then((res) => {
            console.log(res)
            context.commit('setAllProducts', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          console.log(error.response)
          if (error.response.data.result.message === 'Token invalid !') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Fatal! Not allowed to change tokens')
          } else if (error.response.data.result.message === 'token expired') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Please Login Again')
          }
        }
        return Promise.reject(error)
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3400/api/v1/icafe/product', payload)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch('http://localhost:3400/api/v1/icafe/product/' + payload.id, payload.data)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:3400/api/v1/icafe/product/' + payload)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3400/api/v1/icafe/users/register', payload)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3400/api/v1/icafe/users/login', payload)
          .then((res) => {
            context.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            context.dispatch('interceptorRequest')
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    allProducts (state) {
      return state.products
    }
  },
  modules: {
  }
})
