<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-flex flex-wrap justify-content-start no-gutters">
        <CardDailyIncome/>
        <CardOrdersHistory/>
        <CardAnnuallIncome/>
    </div>
</template>

<script>
import CardDailyIncome from '../../components/_base/CardDailyIncome'
import CardOrdersHistory from '../../components/_base/CardOrdersHistory'
import CardAnnuallIncome from '../../components/_base/CardAnnualIncome'
export default {
  name: 'CardHistory',
  components: {
    CardDailyIncome,
    CardOrdersHistory,
    CardAnnuallIncome
  }
}
</script>

<style scoped>

</style>
