<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-3 py-3">
        <div class="card recent-orders shadow-sm">
            <div class="header row d-flex">
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-6 d-flex align-items-start title px-5 py-3">Recent Orders</div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 d-flex align-items-start title px-5 py-3">
                <Pagination
                :data="getPage"
                @select-page="setPage"/>
            </div>
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
                            <td>{{item.employe}}</td>
                            <td>{{moment(item.createAt)}}</td>
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
import Pagination from '../_base/Paginations'
import moment from 'moment'
export default {
  name: 'TableOrders',
  components: {
    Pagination
  },
  methods: {
    ...mapActions(['getAllHistory']),
    moment: (a) => {
      return moment(a).format('dddd, MMMM Do YYYY, h:mm:ss a')
    },
    setPage (e) {
      if (e != null) {
        const url = `?page=${e}`
        this.getAllHistory(url)
      }
    }
  },
  computed: {
    ...mapGetters(['allHistory', 'getPage'])
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
