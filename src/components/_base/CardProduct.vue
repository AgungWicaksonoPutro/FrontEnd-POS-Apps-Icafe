<template>
    <div class="card bg-transparent">
        <a class="nav-link" href="#">
            <div class="image-container" @click="$emit('select-product')">
                <img :src="data.imageProduct" class="card-img-top" alt="blackforest">
            </div>
            <div class="card-body d-flex align-items-start flex-column">
                <p class="card-text text-left">{{data.nameProduct}}</p>
                <h6>Rp. {{data.priceProduct}}</h6>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    data: {
      type: Object
    },
    active: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.image-container{
    width: 100%;
    height: 180px;
}
.image-container img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card {
    border: none;
    flex-basis: 30%;
    margin: 15px;
}

.card-body{
    color: black;
    padding: 3px;
}

.card-text{
    margin: 5px;
    font-size: 14px;
    letter-spacing: 2px;
}

h6{
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
}
.nav-link{
    padding: 0;
}
@media screen and (max-width: 933px) {
    .card {
        flex-basis: 45%;
    }
    .image-container{
    width: 100%;
    height: 140px;
}
  }

@media screen and (max-width: 690px) {
    .card {
        flex-basis: 100%;
    }
    .image-container{
    width: 100%;
    height: 190px;
    }
  }

@media screen and (max-width: 480px) {
    .card {
        flex-basis: 100%;
    }
    .image-container{
    width: 100%;
    height: 130px;
    }
  }
</style>
