<template>
        <section id="about" class="bg-white mt-5 mb-5">
        <div class="container">
            <div class="circle"></div>
            <div class="circle-outer"></div>
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-8 col-sm-12 col-12 d-flex flex-wrap justify-content-center align-items-center">
                    <div class="card galery-about1 mr-2 mb-2 border-white shadow"></div>
                    <div class="card galery-about2 mr-2 mb-2 align-self-end border-white shadow"></div>
                    <div class="card galery-about3 mr-2 border-white shadow"></div>
                    <div class="card galery-about4 mr-2 align-self-start border-white shadow"></div>
                </div>
                <div class="col-md-6 mt-3 text-left">
                    <h4 class="title-section">About</h4>
                    <p class="lead my-2">Rumah makan icafe yang menyajikan hidangan kepada masyarakat dan menyediakan tempat untuk menikmati hidangan tersebut serta menetapkan tarif tertentu untuk makanan dan pelayanannya. Meski pada umumnya rumah makan menyajikan makanan di tempat, tetapi ada juga beberapa yang menyediakan layanan take-out dining dan delivery service sebagai salah satu bentuk pelayanan kepada konsumennya.</p>
                    <button type="button" class="btn btn-warning">View more</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.galery-about1 {
    width: 250px;
    height: 250px;
    border-radius: 0% 100% 100% 100% / 100% 60% 0% 60% ;
    background-image: url('../../../assets/galery1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.galery-about2 {
    width: 150px;
    height: 150px;
    border-radius: 100% 100% 100% 0% / 60% 0% 60% 0% ;
    background-image: url('../../../assets/galery2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.galery-about3 {
    width: 250px;
    height: 200px;
    border-radius: 60% 0% 60% 100% / 60% 100% 100% 0% ;
    background-image: url('../../../assets/galery3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.galery-about4 {
    width: 150px;
    height: 150px;
    border-radius: 0% 60% 61% 100% / 0% 60% 0% 59%  ;
    background-image: url('../../../assets/galery4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.circle {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 900px;
    right: 10px;
    background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.521), rgb(255, 225, 159));
    border-radius: 50%;
}

.circle-outer {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 860px;
    right: 10px;
    border-radius: 50%;
    border: 1px solid rgb(255, 225, 159);
}

</style>
