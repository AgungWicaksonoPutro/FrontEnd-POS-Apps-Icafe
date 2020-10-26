<template>
<b-form class=" text-left">
  <div class="nav-bar">
    <img src="../../assets/Logo-Login.png" alt="Logo">
  </div>
  <h2 class="text-left">Welcome Back!</h2>
  <p class="text-left">Login to continue</p>
  <b-form-group class="form-group">
    <label for="InputEmail1">Email address</label>
    <b-form-input
    v-model="$v.form.email.$model"
    class="form-control"
    aria-describedby="emailHelp"
    :state="validateEmail('email')"
    type="email"
    id="InputEmail1">
    </b-form-input>
    <b-form-invalid-feedback id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
  </b-form-group>
  <b-form-group class="form-group">
    <label for="InputPassword1">Password</label>
    <b-form-input
    type="password"
    class="form-control"
    v-model="$v.form.password.$model"
    :state="validatePassword ('password')"
    id="InputPassword1">
    </b-form-input>
    <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
  </b-form-group>
  <b-form-group class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="Check1">
    <label class="form-check-label" for="Check1">Check me out</label>
  </b-form-group>
  <button type="submit" class="btn  btn-warning" @click="handleLogin">Login</button>
  <b-form-group class="form-group mt-3">
  <label for="SignUp"><span> Or </span><router-link :to="{name: 'Register'}" class="router-link">Sign-Up</router-link></label>
  </b-form-group>
</b-form>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(3)
      },
      password: {
        required
      }
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.form.email,
        password: this.form.password
      }
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.login(data)
        .then(() => {
          this.$router.push('/Home')
        })
    },
    ...mapActions(['login']),
    validateEmail (email) {
      const { $dirty, $error } = this.$v.form[email]
      return $dirty ? !$error : null
    },
    validatePassword (password) {
      const { $dirty, $error } = this.$v.form[password]
      return $dirty ? !$error : null
    }
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
