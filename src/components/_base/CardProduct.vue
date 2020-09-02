<template>
    <div class="card bg-transparent">
        <a class="nav-link" href="#">
            <img :src="data.imageProduct" class="card-img-top" alt="blackforest">
            <div class="card-body d-flex align-items-start flex-column">
                <p class="card-text">{{data.nameProduct}}</p>
                <h6>{{data.priceProduct}}</h6>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['data']
}
</script>

<style scoped>
.card {
    border: none;
    flex-basis: 30%;
    margin: 10px;
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

@media screen and (max-width: 933px) {
    .card {
        flex-basis: 45%;
    }
  }

@media screen and (max-width: 690px) {
    .card {
        flex-basis: 100%;
    }
  }

@media screen and (max-width: 480px) {
    .card {
        flex-basis: 100%;
    }
  }
</style>
