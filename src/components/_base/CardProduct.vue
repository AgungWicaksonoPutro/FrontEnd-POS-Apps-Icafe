<template>
    <div class="card bg-transparent">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="blackforest">
        <div class="card-body d-flex align-items-start flex-column">
            <p class="card-text">Coffe Latte</p>
            <h6>Rp. 15.000</h6>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardProduct'
}
</script>

<style scoped>
.card {
    border: none;
    flex-basis: 30%;
    margin: 10px;
}
.card .card-body{
    padding: 3px;
}

.card .card-text{
    margin: 5px;
    font-size: 14px;
    letter-spacing: 2px;
}

.card h6{
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
}

@media screen and (max-width: 933px) {
    .card {
        flex-basis: 45%;
    }
  }

@media screen and (max-width: 480px) {
    .card {
        flex-basis: 100%;
    }
  }

@media screen and (max-width: 690px) {
    .card {
        flex-basis: 100%;
    }
  }
</style>
