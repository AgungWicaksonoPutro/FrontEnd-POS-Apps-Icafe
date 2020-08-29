<template>
    <div class="row no-gutters">
        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2">
            <VerticalNav/>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-10 bg-grey">
            <div class="row card-row no-gutters">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 bg-white"></div>
    </div>
</template>

<script>
import VerticalNav from '../../../components/_base/VerticalNav'
import CardProduct from '../../../components/_base/CardProduct'
export default {
  name: 'Home',
  components: {
    VerticalNav,
    CardProduct
  }
}
</script>

<style scoped>
.card-row {
    padding: 10px;
}
.bg-grey {
    background-color: rgba(190, 195, 202, 0.3);
}
.bg-white {
    background-color: #FFFFFF;
}
</style>
