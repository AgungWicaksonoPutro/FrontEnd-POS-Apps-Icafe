<template>
<nav class="row navbar navbar-expand-lg navbar-white bg-white no-gutters sticky-top">
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
        <ul class="nav mt-3 mb-3">
            <li class="mx-auto nav-item "><a class="nav-link text-dark active" href="#"><i class="fas fa-bars"></i></a></li>
        </ul>
    </div>
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-10 navbar-nav-scroll border-right">
        <ul class="nav mt-3 mb-3">
            <a href="#" class="navbar-brand text-dark mx-auto">Food Items</a>
            <li class="nav-item mr-3"><a class="nav-link mx-auto text-dark active" href="#"><i class="fas fa-search"></i></a></li>
        </ul>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <ul class="nav mt-2 mb-2">
            <li class="mx-auto nav-item "><a class="nav-link text-dark active" href="#"><p class="cart-nav">Cart <span class="badge badge-pill badge-info">{{totalQty}}</span></p></a></li>
        </ul>
    </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['getCart']),
    totalQty () {
      return this.getCart.reduce((a, b) => a + b.qty, 0)
    }
  }
}
</script>

<style scoped>
.navbar{
    padding: 0px;
}
</style>
