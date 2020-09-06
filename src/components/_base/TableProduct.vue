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
                        <tr v-for="item in allProducts" :key="item.id">
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
                                <button type="button" class="btn btn-warning my-2"><i class="far fa-edit"></i></button>
                                <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Modal v-show="modalActive"/>
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
    modalActive: true,
    dataModal: {
      idProduct: null,
      nameProduct: '',
      stockProduct: 0,
      descriptionProduct: '',
      priceProduct: 0,
      imageProduct: null,
      idcategory: 0
    }
  }),
  methods: {
    ...mapActions(['getAllProducts']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    },
    handleEventModal () {
      this.dataModal.id ? this.updateProduct() : this.addProdcut()
    },
    clearModal () {
      this.dataModal.idProduct = null
      this.dataModal.nameProduct = ''
      this.dataModal.stockProduct = 0
      this.dataModal.descriptionProduct = ''
      this.dataModal.priceProduct = 0
      this.dataModal.imageProduct = null
      this.dataModal.idcategory = 0
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
    width: 80%;
}
</style>
