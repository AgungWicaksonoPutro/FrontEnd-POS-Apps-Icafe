<template>
<div class="row no-gutters d-flex flex-wrap">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        <AuthComplex/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">2</div>
</div>
</template>

<script>
import AuthComplex from '../../components/_base/AuthComplex'
export default {
  name: 'Login',
  components: {
    AuthComplex
  }
}
</script>

<style scoped>

</style>
