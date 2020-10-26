<template>
<b-form class="form text-left">
  <div class="nav-bar">
    <img src="../../assets/Logo-Login.png" alt="Logo">
  </div>
  <h2 class="text-left">Sign up.</h2>
  <p class="text-left">Give us some of your information to get free accsess to fieldly</p>
  <b-form-group class="form-group">
    <label for="InputfirstName">First Name</label>
    <b-form-input
      type="text"
      class="form-control"
      id="inputFirstName"
      v-model="$v.form.firstName.$model"
      :state="validateFirstName ('firstName')"
      aria-describedby="firstNameHelp">
      </b-form-input>
    <b-form-invalid-feedback id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
  </b-form-group>
  <b-form-group class="form-group">
    <label for="InputLastName">Last Name</label>
    <b-form-input
     type="text"
      class="form-control"
      id="inputLastName"
      v-model="$v.form.lastName.$model"
      :state="validateLastName ('lastName')"
      aria-describedby="lastNameHelp">
      </b-form-input>
    <b-form-invalid-feedback id="input-1-live-feedback">This is a required field.</b-form-invalid-feedback>
  </b-form-group>
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
    <label class="form-check-label" for="Check1">By creating account you agree to the <a href="#">term of us</a> and our <a href="#">privacy policy</a> </label>
  </b-form-group>
  <button type="submit" class="btn btn-warning" @click="handleRegister">Sign Up</button>
  <b-form-group class="form-group mt-3">
  <label for="SignUp"><span>Already have an account </span><router-link :to="{name: 'Login'}" class="router-link">Log in</router-link></label>
  </b-form-group>
</b-form>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  name: 'FormRegister',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        roleId: 1
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(4)
      },
      lastName: {
        required,
        minLength: minLength(4)
      },
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
    ...mapActions(['register']),
    validateFirstName (firstName) {
      const { $dirty, $error } = this.$v.form[firstName]
      return $dirty ? !$error : null
    },
    validateLastName (lastName) {
      const { $dirty, $error } = this.$v.form[lastName]
      return $dirty ? !$error : null
    },
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
.form{
  margin-left: 10px;
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
