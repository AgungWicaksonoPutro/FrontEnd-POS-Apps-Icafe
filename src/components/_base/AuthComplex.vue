<template>
    <div class="container-fluid no-gutters">
      <router-link class="btn" :to="{name: 'LandingPage'}"><i class="fas fa-long-arrow-alt-left"></i> Back</router-link>

    </div>
</template>

<script>
export default {
  name: 'AuthComplex'
}
</script>

<style scoped>
.container-fluid{
    width: 100%;
    height: 110vh;
    background-image: linear-gradient(-250deg, rgba(252, 216, 140, 0.945),rgba(255, 252, 252, 0.836)),url('../../assets/5a7b048038a26f0001b23763_eat_vegan_food_in_london.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.btn {
  position: absolute;
  left: 50px;
  top: 15px;
  font-size: 18px;
}
</style>
