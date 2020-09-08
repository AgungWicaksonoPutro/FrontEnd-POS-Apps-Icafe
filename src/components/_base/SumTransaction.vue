<template>
    <div class="row summary-transaction no-gutters">
        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 d-flex justify-content-start px-3">Total :</div>
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5" v-if="getCart.length">Rp. {{getPricing.toLocaleString('de-DE')}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SumTransaction',
  computed: {
    ...mapGetters(['getCart', 'getPricing'])
  }
}
</script>

<style scoped>
.summary-transaction{
  font-size: 16px;
  font-family: 'Airbnb Cereal App Extra Bold', sans-serif;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
</style>
