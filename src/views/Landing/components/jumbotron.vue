<template>
        <div class="jumbotron jumbotron-fluid col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="bg-leaf1"></div>
            <div class="bg-leaf2"></div>
            <div class="bg-leaf3"></div>
            <div class="bg-leaf4"></div>
            <div class="bg-image"></div>
            <div class="container body-jumbotron text-left">
                <h4 class="display-4">Choose and taste to your place</h4>
                <p class="lead my-4">If you really want to make a friend, go to someone’s house and eat with him or her. The people who give you their food give you their heart</p>
                <button type="button" class="btn btn-warning">Get Started</button>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
.jumbotron-fluid {
    height: 150vh;
    clip-path: circle(80% at 37% 0);
    background-color: #FCD88C;
}

.body-jumbotron {
    width: 50%;
    position: absolute;
    top: 100px;
    left: 60px;
    letter-spacing: 2px;
}

.bg-image {
    position: absolute;
    top: 0;
    right: 30px;
    width: 570px;
    height: 570px;
    background-image: url('../../../assets/bg-image1.png');
    background-size: 100%;
    background-repeat: no-repeat;
}

.bg-leaf1 {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 130px;
    height: 130px;
    background-image: url('../../../assets/mint1.png');
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotate(280deg);
}

.bg-leaf2 {
    position: absolute;
    right: 500px;
    top: 400px;
    width: 130px;
    height: 130px;
    background-image: url('../../../assets/mint2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotate(290deg);
}

.bg-leaf3 {
    position: absolute;
    left: 0;
    top: 50px;
    width: 90px;
    height: 90px;
    background-image: url('../../../assets/mint2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotate(120deg);
    opacity: 0.7;
}

.bg-leaf4 {
    position: absolute;
    left: 260px;
    top: 0;
    width: 150px;
    height: 150px;
    background-image: url('../../../assets/mint2.png');
    background-size: 100%;
    background-repeat: no-repeat;
    transform: rotate(190deg);
    opacity: 0.1;
}

</style>
