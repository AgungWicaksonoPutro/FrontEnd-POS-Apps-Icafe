<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-3 py-3">
        <div class="card recent-orders shadow-sm">
            <div class="header row d-flex">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6 d-flex align-items-start title px-5 py-3">Recent Orders</div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 option-period py-3 px-5">
                    <select class="form-control bg-light" id="exampleFormControlSelect1">
                            <option>Month</option>
                    </select>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">INVOICES</th>
                            <th scope="col">CASHIER</th>
                            <th scope="col">DATE</th>
                            <th scope="col">ORDERS</th>
                            <th scope="col">AMOUNTH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in allHistory" :key="item.idHistory">
                            <th scope="row">{{item.invoices}}</th>
                            <td>{{item.idEmploye}}</td>
                            <td>{{item.createAt}}</td>
                            <td class="text-left">{{item.orders}}</td>
                            <td>Rp. {{item.amounts.toLocaleString('de-DE')}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TableOrders',
  methods: {
    ...mapActions(['getAllHistory'])
  },
  computed: {
    ...mapGetters(['allHistory'])
  },
  mounted () {
    this.getAllHistory()
  }
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}
</style>
