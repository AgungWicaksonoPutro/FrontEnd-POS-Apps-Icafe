<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
        <button  @click="$emit('event-checkout')" type="button" class="btn btn-primary">Checkout</button>
    </div>
</template>

<script>
export default {
  name: 'ButtonCheckout'
}
</script>

<style scoped>
.btn-primary{
    width: 100%;
    margin: 10px;
    border-radius: 0;
    background: #57CAD5;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 33px;
    font-weight: bold;
    border-color: transparent;
}
</style>
