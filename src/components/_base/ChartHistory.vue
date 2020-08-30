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
                <canvas></canvas>
            </div>
    </div>
</template>

<script>
export default {
  name: 'ChartHistory'
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}
</style>
