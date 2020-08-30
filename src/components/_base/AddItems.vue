<template>
    <div class="item-details row no-gutters bg-white shadow-sm d-flex flex-wrap justify-content-center align-items-center m-3">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 no-gutters left">
            <img src="https://via.placeholder.com/150" class="card-img" alt="...">
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 no-gutters right d-flex justify-content-start align-items-start flex-wrap">
            <div class="title my-2 mx-2 top border">2</div>
            <div class="row no-gutters my-2 mx-2 bottom border d-flex flex-wrap">
                <div class="spinner">11</div>
                <div class="price">11</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddItems'
}
</script>

<style scoped>
.item-details{
    flex-basis: 100%;
    margin: 10px;
    border-radius: 5px;
}
.top{
    flex-basis: 100%;
}
.bottom{
    flex-basis: 100%;
}
.spinner{
    flex-basis: 50%;
}
.price{
    flex-basis: 50%;
}
.card-img{
    width: 100%;
}

@media screen and (max-width: 933px) {
    .spinner{
        flex-basis: 100%;
    }
    .price{
        flex-basis: 100%;
    }
  }

@media screen and (max-width: 690px) {
    .spinner{
        flex-basis: 100%;
    }
    .price{
        flex-basis: 100%;
    }
  }

@media screen and (max-width: 480px) {
    .spinner{
        flex-basis: 100%;
    }
    .price{
        flex-basis: 100%;
    }
  }
</style>
