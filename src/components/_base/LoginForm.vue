<template>
<form class=" text-left">
  <div class="nav-bar">
    <img src="../../assets/Logo-Login.png" alt="Logo">
  </div>
  <h2 class="text-left">Welcome Back!</h2>
  <p class="text-left">Login to continue</p>
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email" id="InputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" id="InputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="Check1">
    <label class="form-check-label" for="Check1">Check me out</label>
  </div>
  <button type="submit" class="btn  btn-warning" @click="handleLogin">Login</button>
  <div class="form-group mt-3">
  <label for="SignUp"><span> Or </span><router-link :to="{name: 'Register'}" class="router-link">Sign-Up</router-link></label>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then(() => {
          this.$router.push('/Home')
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
form{
  position: absolute;
  top: 80px;
  left: 50px;
  width: 70%;
}
.form-group{
    font-size: 14px;
}
.form-control{
    height: 30px;
}
label{
  font-family: 'Airbnb Cereal App Medium', sans-serif;
  letter-spacing: 1px;
}
span{
  font-family: 'Airbnb Cereal App Light', sans-serif;
  letter-spacing: 1px;
}
.nav-bar{
  width: 100px;
  height: 100px;
}
.nav-bar img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.router-link{
  text-decoration: none;
  color: inherit;
}
</style>
