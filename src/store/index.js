import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    user: {},
    token: localStorage.getItem('token') || null,
    carts: [],
    history: [],
    headerTransaction: {},
    paginations: []
  },
  mutations: {
    setInvoice (state, payload) {
      const data = {}
      data.invoice = payload
      data.cashier = state.user.firstName
      state.headerTransaction = data
    },
    setAllProducts (state, payload) {
      state.products = payload
    },
    setAllHistory (state, payload) {
      state.history = payload
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    setPaginations (state, payload) {
      state.paginations = payload
    },
    addCart (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.idProduct === payload.idProduct
      })
      if (!isCart) {
        const item = payload
        state.carts.push({
          ...item,
          qty: 1
        })
      } else {
        state.carts = state.carts.filter((item) => {
          return item.idProduct !== payload.idProduct
        })
      }
    },
    deleteToken (state) {
      state.token = null
    },
    addQty (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.idProduct === payload.idProduct
      })
      isCart.qty++
    },
    removeFromCart (state, payload) {
      state.carts = state.carts.filter((item) => { return item.idProduct !== payload.idProduct })
    },
    reduceQty (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.idProduct === payload.idProduct
      })
      if (isCart.qty > 1) {
        isCart.qty--
      } else {
        state.carts = state.carts.filter((item) => { return item.idProduct !== payload.idProduct })
      }
    },
    emptyCart (state) {
      state.carts = []
    }
  },
  actions: {
    getAllProducts (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_API_URL + `product${payload || ''}`)
          .then((res) => {
            context.commit('setAllProducts', res.data.result)
            context.commit('setPaginations', res.data.paginations)
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
        if (error.response.status === 403) {
          if (error.response.data.result.message === 'Token Expired !') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('Login')
            Vue.swal('Error', 'Please login again !', 'error')
          } else if (error.response.data.result.message === 'Token invalid !') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('Login')
            Vue.swal('Error', 'Some kind of error', 'error')
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
        axios.post(process.env.VUE_APP_API_URL + 'product', payload)
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
        axios.patch(process.env.VUE_APP_API_URL + 'product/' + payload.id, payload.data)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteProduct (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_API_URL + 'product/' + payload)
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
        axios.post(process.env.VUE_APP_API_URL + 'users/register', payload)
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
        axios.post(process.env.VUE_APP_API_URL + 'users/login', payload)
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
    },
    logOut (context) {
      context.commit('deleteToken')
      localStorage.removeItem('token')
      router.push('LandingPage')
    },
    addHistory ({ state, getters }) {
      const data = {}
      data.invoices = state.headerTransaction.invoice
      data.employe = state.headerTransaction.cashier
      data.orders = state.carts.map((item) => {
        return item.nameProduct
      }).join(', ')
      data.amounts = Number(getters.getPricing) * 110 / 100
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_URL + 'history/', data)
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllHistory (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_API_URL + `history${payload || ''}`)
          .then((res) => {
            console.log(res)
            context.commit('setAllHistory', res.data.result)
            context.commit('setPaginations', res.data.paginations)
            resolve(res.data.result)
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
    },
    allHistory (state) {
      return state.history
    },
    getPage (state) {
      return state.paginations
    },
    getCart (state) {
      return state.carts
    },
    getPricing (state) {
      return state.carts.reduce((a, b) => a + b.qty * b.priceProduct, 0)
    },
    getHeaderTrans (state) {
      return state.headerTransaction
    }
  },
  modules: {
  }
})
