<template>
        <div class="card order">
            <div class="shape-effect">
                <div class="radial1"></div>
                <div class="radial2"></div>
                <div class="radial3"></div>
            </div>
            <div class="body-card">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-report d-flex justify-content-start">Orders</div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 finance-report d-flex justify-content-start">{{order.toLocaleString('de-DE')}}</div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 period d-flex justify-content-start">+5% Last Week</div>
            </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DailyIncome',
  data () {
    return {
      order: 0
    }
  },
  computed: {
    ...mapGetters(['allHistory'])
  },
  mounted () {
    const tabulasiData = this.allHistory
    this.order = tabulasiData.length
  }
}
</script>

<style scoped>
.card {
    border: none;
}
.card.order {
    margin: 20px;
    flex-basis: 30%;
    background-image: linear-gradient(30deg,rgba(255, 255, 255, 0.712), rgba(41, 223, 255, 0.692));
    box-shadow: 2px 5px 5px rgba(41, 223, 255, 0.692);
}
.shape-effect .radial1{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.shape-effect .radial2{
    position: absolute;
    right: 30px;
    top: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.shape-effect .radial3{
    position: absolute;
    right: 50px;
    top: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.card .body-card{
    padding: 15px;
    margin-top: 40px;
    margin-bottom: 30px;
}
.finance-report{
    font-family: 'Airbnb Cereal App Extra Bold', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
}
@media screen and (max-width: 933px) {
    .card.order {
        flex-basis: 40%;
    }
  }

@media screen and (max-width: 690px) {
    .card.order {
        margin: 20px;
        flex-basis: 40%;
    }
  }

@media screen and (max-width: 480px) {
    .card.order {
        margin: 20px;
        flex-basis: 100%;
    }
  }
</style>
