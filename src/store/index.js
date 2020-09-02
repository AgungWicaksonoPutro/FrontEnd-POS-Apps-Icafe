import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setAllProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    getAllProducts (context) {
      return new Promise((resolve, reject) => {
        axios.get('localhost:3400/api/v1/icafe/product')
          .then((res) => {
            console.log(res)
            // context.commit('setAllProducts', res.data.result)
            // resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            // reject(err)
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
