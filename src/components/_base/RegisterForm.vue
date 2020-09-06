<template>
<form class=" text-left">
  <div class="nav-bar">
    <img src="../../assets/Logo-Login.png" alt="Logo">
  </div>
  <h2 class="text-left">Sign up.</h2>
  <p class="text-left">Give us some of your information to get free accsess to fieldly</p>
  <div class="form-group">
    <label for="InputfirstName">First Name</label>
    <input type="text" class="form-control" id="inputFirstName" v-model="firstName" aria-describedby="firstNameHelp">
  </div>
  <div class="form-group">
    <label for="InputLastName">Last Name</label>
    <input type="text" class="form-control" id="inputLastName" v-model="lastName" aria-describedby="lastNameHelp">
  </div>
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="InputEmail1" v-model="email" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" id="InputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="Check1">
    <label class="form-check-label" for="Check1">By creating account you agree to the <a href="#">term of us</a> and our <a href="#">privacy policy</a> </label>
  </div>
  <button type="submit" class="btn btn-warning" @click="handleRegister">Sign Up</button>
  <div class="form-group mt-3">
  <label for="SignUp"><span>Already have an account </span><router-link :to="{name: 'Login'}" class="router-link">Log in</router-link></label>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FormRegister',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      roleId: 1
    }
  },
  methods: {
    handleRegister (e) {
      e.preventDefault()
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        roleId: this.roleId
      }
      this.register(data)
        .then(() => {
          this.$router.push('/Login')
        })
    },
    ...mapActions(['register'])
  }
}
</script>

<style scoped>
form{
  position: absolute;
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
