<template>
        <div class="card daily-income">
            <div class="shape-effect">
                <div class="radial1"></div>
                <div class="radial2"></div>
                <div class="radial3"></div>
            </div>
            <div class="body-card">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-report d-flex justify-content-start">Today’s Income</div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 finance-report d-flex justify-content-start">Rp. {{income.toLocaleString('de-DE')}} </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 period d-flex justify-content-start">+2% Yesterday</div>
            </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'DailyIncome',
  data () {
    return {
      income: 0
    }
  },
  computed: {
    ...mapGetters(['allHistory'])
  },
  mounted () {
    const tabulasiData = this.allHistory
    const data = tabulasiData.filter(a => {
      return moment(a.createAt).format('ll') === moment(new Date()).format('ll')
    }).map(a => {
      return a.amounts
    }).reduce((a, b) => a + b)
    this.income = data
  }
}
</script>

<style scoped>
.card {
    border: none;
}
.card.daily-income {
    margin: 17px;
    flex-basis: 30%;
    background-image: linear-gradient(30deg, rgba(255, 255, 255, 0.712), rgba(251, 178, 180, 0.76));
    box-shadow: 2px 5px 5px rgba(251, 178, 180, 0.582);
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
    .card.daily-income {
        flex-basis: 40%;
    }
  }

@media screen and (max-width: 690px) {
    .card.daily-income {
        margin: 20px;
        flex-basis: 40%;
    }
  }

@media screen and (max-width: 480px) {
    .card.daily-income {
        margin: 20px;
        flex-basis: 100%;
    }
  }
</style>
