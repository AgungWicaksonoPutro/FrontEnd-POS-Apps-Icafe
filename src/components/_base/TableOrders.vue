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
                        <tr>
                            <th scope="row">#10928</th>
                            <td>Cashier 1</td>
                            <td>06 October 2019</td>
                            <td>Ice Tea, Salad with Coconuth</td>
                            <td>Rp. 120.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TableOrders'
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}
</style>
