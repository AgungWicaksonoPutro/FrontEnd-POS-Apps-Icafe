<template>
<div class="row no-gutters d-flex flex-wrap">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 left">
        <AuthComplex/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 right">
      <div class="row no-gutters">
        <LoginForm/>
      </div>
    </div>
</div>
</template>

<script>
import AuthComplex from '../../components/_base/AuthComplex'
import LoginForm from '../../components/_base/LoginForm'
export default {
  name: 'Login',
  components: {
    AuthComplex,
    LoginForm
  }
}
</script>

<style scoped>

</style>
