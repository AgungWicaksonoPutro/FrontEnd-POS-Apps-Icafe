<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-3">
        <div class="card grafik shadow-sm">
            <div class="header row d-flex">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6 d-flex align-items-start title px-5 py-3">Revenue</div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 option-period py-3 px-5">
                    <select class="form-control bg-light" id="exampleFormControlSelect1">
                        <option>Month</option>
                        <option>Years</option>
                    </select>
                </div>
            </div>
                <line-chart :chartData="datacollection" :options="options" :styles="myStyles"></line-chart>
            </div>
    </div>
</template>

<script>
import LineChart from './ChartMonthly'
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'ChartHistory',
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: {
        labels: [],
        datasets: [
          {
            label: 'This Month',
            borderColor: '#f87979',
            backgroundColor: '#f87979',
            fill: false,
            data: []
          }, {
            label: 'Last Month',
            borderColor: '#26deff',
            backgroundColor: '#26deff',
            fill: false,
            data: []
          }
        ]
      },
      height: 450,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    ...mapGetters(['allHistory']),
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  },
  mounted () {
    const tabData = this.allHistory
    const dataLabels = tabData.filter(a => {
      return moment(a.createAt).format('MMMM') === moment(new Date()).format('MMMM')
    }).map(a => {
      return moment(a.createAt).format('lll')
    })
    this.datacollection.labels = dataLabels
    const dataSet = tabData.filter(a => {
      return moment(a.createAt).format('MMMM') === moment(new Date()).format('MMMM')
    }).map(a => {
      return a.amounts.toString()
    })
    this.datacollection.datasets[0].data = dataSet
    const dataSetYear = tabData.filter(a => {
      return moment(a.createAt).format('MMMM') === moment('9').format('MMMM')
    }).map(a => {
      return a.amounts.toString()
    })
    this.datacollection.datasets[1].data = dataSetYear
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
