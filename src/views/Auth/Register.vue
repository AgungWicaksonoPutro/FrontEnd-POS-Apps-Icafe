<template>
<div class="row register no-gutters d-flex flex-wrap align-items-center">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <AuthComplex/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
      <div class="row no-gutters right">
        <RegisterForm/>
      </div>
    </div>
</div>
</template>

<script>
import AuthComplex from '../../components/_base/AuthComplex'
import RegisterForm from '../../components/_base/RegisterForm'
export default {
  name: 'Login',
  components: {
    AuthComplex,
    RegisterForm
  }
}
</script>

<style scoped>

</style>
