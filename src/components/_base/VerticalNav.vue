<template>
    <nav class="nav flex-column">
        <router-link :to="{name: 'Home'}" class="nav-link active mx-auto mb-3 mt-3 fork"></router-link>
        <router-link :to="{name: 'History'}" class="nav-link mx-auto mb-3 mt-2  clipboard"></router-link>
        <router-link :to="{name: 'Add'}" class="nav-link mx-auto mb-3 mt-2  add"></router-link>
        <button @click="handleLogOut" class="nav-link mx-auto mb-3 mt-2  logout"><i class="fas fa-sign-out-alt"></i></button>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'VerticalNav',
  methods: {
    ...mapActions(['logOut']),
    handleLogOut () {
      this.$swal({
        title: 'Are you sure Log Out?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logOut()
            .then(res => {
              this.$swal(
                {
                  text: 'Tahanks u',
                  icon: 'success'
                }
              )
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.nav{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.fork{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/fork.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.clipboard{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/clipboard.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.add{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/add.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
button{
    border: none;
    background: transparent;
    font-size: 26px;
}
</style>
