<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-3 py-3">
        <div class="card recent-orders shadow-sm">
            <div class="header row d-flex">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-start title px-5 py-3">All Product</div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-5 d-flex align-items-start title px-5 py-3">
                Pagination
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 d-flex align-items-start title px-5 py-3">
                <button type="button" class="btn btn-primary ml-auto"  @click="toggleModal"><i class="fas fa-plus"> Add New Product </i></button>
            </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">IMAGE</th>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in allProducts" :key="item.id" >
                            <th scope="row">{{item.idProduct}}</th>
                            <td class="text-left">{{item.nameProduct}}</td>
                            <td>{{item.stockProduct}}</td>
                            <td class="text-left">{{item.descriptionProduct}}</td>
                            <td>{{item.priceProduct}}</td>
                            <td>
                                <div class="image-container">
                                    <img :src="item.imageProduct" alt="">
                                </div>
                                </td>
                            <td>{{item.idCategory}}</td>
                            <td>
                                <button type="button" class="btn btn-warning my-2" @click="setUpdate(item)"><i class="far fa-edit"></i></button>
                                <button type="button" class="btn btn-danger" @click="deleteProduct(item)"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Modal v-show="modalActive" :data="dataModal" @close-modal="toggleModal" @handle-event="handleEventModal"/>
    </div>
</template>

<script>
import Modal from './Modal'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TableProduct',
  components: {
    Modal
  },
  data: () => ({
    modalActive: false,
    dataModal: {
      idProduct: null,
      nameProduct: '',
      stockProduct: 0,
      descriptionProduct: '',
      priceProduct: 0,
      imageProduct: null,
      idCategory: 0
    }
  }),
  methods: {
    ...mapActions(['getAllProducts', 'insertProduct', 'editProduct', ' deleteProduct']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    },
    setUpdate (data) {
      console.log(data)
      this.modalActive = true
      this.dataModal.idProduct = data.idProduct
      this.dataModal.nameProduct = data.nameProduct
      this.dataModal.stockProduct = data.stockProduct
      this.dataModal.descriptionProduct = data.descriptionProduct
      this.dataModal.priceProduct = data.priceProduct
      this.dataModal.imageProduct = data.imageProduct
      this.dataModal.idCategory = data.idCategory
    },
    handleEventModal () {
      this.dataModal.idProduct ? this.updateProduct() : this.addProdcut()
    },
    addProdcut () {
      const data = new FormData()
      data.append('nameProduct', this.dataModal.nameProduct)
      data.append('stockProduct', this.dataModal.stockProduct)
      data.append('descriptionProduct', this.dataModal.descriptionProduct)
      data.append('priceProduct', this.dataModal.priceProduct)
      data.append('imageProduct', this.dataModal.imageProduct)
      data.append('idCategory', this.dataModal.idCategory)
      this.insertProduct(data)
        .then(res => {
          this.clearModal()
          this.getAllProducts()
          alert('insert berhasil')
        })
    },
    updateProduct () {
      const data = new FormData()
      data.append('nameProduct', this.dataModal.nameProduct)
      data.append('stockProduct', this.dataModal.stockProduct)
      data.append('descriptionProduct', this.dataModal.descriptionProduct)
      data.append('priceProduct', this.dataModal.priceProduct)
      data.append('imageProduct', this.dataModal.imageProduct)
      data.append('idCategory', this.dataModal.idCategory)
      const container = {
        id: this.dataModal.idProduct,
        data: data
      }
      this.editProduct(container)
        .then(res => {
          this.clearModal()
          this.getAllProducts()
          alert('update berhasil')
        })
    },
    clearModal () {
      this.dataModal.idProduct = null
      this.dataModal.nameProduct = ''
      this.dataModal.stockProduct = 0
      this.dataModal.descriptionProduct = ''
      this.dataModal.priceProduct = 0
      this.dataModal.imageProduct = null
      this.dataModal.idCategory = 0
      this.modalActive = false
    }
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}
.image-container{
    width: 60px;
    height: 60px;
}
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
button{
    width: 50px;
}
.btn-primary{
    width: 100%;
}
</style>
