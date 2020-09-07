<template>
    <div class="row no-gutters mx-2 my-2">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 shadow-sm bg-white border-radius p-2" v-for="item in getCart" :key="item.idProduct">
            <div class="row no-gutters">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                    <div class="row no-gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="image-container">
                                <img :src="item.imageProduct" alt="Image-Product">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 d-flex flex-column">
                    <div class="row no-gutters top">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">{{item.nameProduct}}</div>
                    </div>
                    <div class="row no-gutters d-flex align-items-end bottom">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="row no-gutters">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div class="row no-gutters d-flex justify-content-center flex-wrap">
                                        <button class="col">-</button>
                                        <div class="col control-num">1</div>
                                        <button class="col">+</button>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">Rp. {{item.priceProduct}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AddItems',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getCart'])
  }
}
</script>

<style scoped>
.border-radius{
    border-radius: 5px;
}
.image-container{
    width: 90px;
    height: 80px;
}
.image-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
}
.col{
    flex-basis: 33%;
}
.top{
    flex-basis: 100%;
}
.bottom{
    flex-basis: 100%;
}
button{
    color: #82DE3A;
    background: rgba(130, 222, 58, 0.2);
    border: 1px solid #82DE3A;
}
.control-num {
    color: #82DE3A;
    background: #eeffee;
    border: 1px solid #82DE3A;
}

@media screen and (max-width: 933px) {
    .col{
    flex-basis: 33%;
    }
  }

@media screen and (max-width: 738px) {
    .col{
    flex-basis: 100%;
    }
  }
@media screen and (max-width: 690px) {
    .col{
    flex-basis: 100%;
    }
  }

@media screen and (max-width: 574px) {
    .col{
    flex-basis: 33%;
    }
  }
@media screen and (max-width: 480px) {
    .col{
    flex-basis: 33%;
    }
  }
@media screen and (max-width: 200px) {
    .col{
    flex-basis: 100%;
    }
  }
</style>
