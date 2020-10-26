<template>
<div>
    <Navbar/>
    <div class="row no-gutters">
        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 left">
            <VerticalNav/>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-10 bg-grey center">
            <div class="row no-gutters">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mx-3 my-2">
                    <!-- Search form -->
                    <input class="form-control" type="text" placeholder="Search" v-on:keyup.enter="setSearch" aria-label="Search">
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mx-3 my-2">
                <select id="sort" class="form-control" @change="setSort">
                    <option selected disabled> - pilih - </option>
                    <option value="priceProduct">Price Min - Max</option>
                    <option value="nameProduct">Name</option>
                </select>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mx-3 my-2">
                  <Pagination
                  :data="getPage"
                  @select-page="setPage"/>
                </div>
            </div>
            <div class="row card-row no-gutters">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" v-for="item in allProducts" :key="item.id">
                    <CardProduct
                    :data="item"
                    @select-product="addCart(item)"/>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 bg-white right">
            <div class="list-cart">
                <AddItems/>
            </div>
            <div class="execute">
                <SumTransaction/>
                <div class="row info-tax no-gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start px-3 text-left"><p>*Belum termasuk ppn</p></div>
                </div>
                <div class="row button-execute no-gutters">
                    <ButtonCheckout @event-checkout="toggleModal"/>
                    <ButtonCancel/>
                </div>
            </div>
        </div>
    </div>
    <ModalCheckout v-show="modalActive" @close-modal="toggleModal"/>
</div>
</template>

<script>
import Navbar from '../../../components/_base/Navbar'
import VerticalNav from '../../../components/_base/VerticalNav'
import CardProduct from '../../../components/_base/CardProduct'
import AddItems from '../../../components/_base/AddItems'
import SumTransaction from '../../../components/_base/SumTransaction'
import ButtonCheckout from '../../../components/_base/ButtonCheckout'
import ButtonCancel from '../../../components/_base/ButtonCancel'
import ModalCheckout from '../../../components/_base/ModalCheckout'
import Pagination from '../../../components/_base/Paginations'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      modalActive: false
    }
  },
  components: {
    VerticalNav,
    CardProduct,
    Navbar,
    AddItems,
    SumTransaction,
    ButtonCheckout,
    ButtonCancel,
    ModalCheckout,
    Pagination
  },
  methods: {
    ...mapActions(['getAllProducts', 'addHistory']),
    ...mapMutations(['addCart', 'setInvoice']),
    setSearch (e) {
      const url = `?search=${e.target.value}`
      this.getAllProducts(url)
    },
    toggleModal () {
      if (!this.modalActive) {
        const invoceNum = '#' + Math.floor(Math.random() * 99999)
        this.setInvoice(invoceNum)
        this.addHistory()
      }
      this.modalActive = !this.modalActive
    },
    setSort (e) {
      console.log(e.target)
      const url = `?sort=${e.target.value}`
      this.getAllProducts(url)
    },
    setSortData (e) {
      const url = `?typeSort=${e.target.value}`
      this.getAllProducts(url)
    },
    setPage (e) {
      if (e != null) {
        const url = `?page=${e}`
        this.getAllProducts(url)
      }
    }
  },
  computed: {
    ...mapGetters(['allProducts', 'getCart', 'getPage'])
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>

<style scoped>
.left {
    height: 100vh;
    box-shadow: 6px 0px 16px -8px rgba(173,173,173,1);
}
.center{
    height: 100vh;
    box-shadow: inset 0px 8px 16px -9px rgba(173,173,173,1);
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.right{
    height: 100vh;
    box-shadow: inset 0px 8px 16px -9px rgba(173,173,173,1);
}
.card-row {
    padding: 10px;
}
.bg-grey {
    background-color: rgba(190, 195, 202, 0.3);
}
.bg-white {
    background-color: #FFFFFF;
}
.list-cart{
    height: 70%;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.execute{
    height: 30%;
}
.info-tax {
    font-size: 16px;
    letter-spacing: 2px;
}
.center::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.center::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.308);
  border-radius: 10px;
}
.list-cart::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.list-cart::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.233);
  border-radius: 10px;
}
</style>
