<template>
        <div class="card annual-income">
            <div class="shape-effect">
                <div class="radial1"></div>
                <div class="radial2"></div>
                <div class="radial3"></div>
            </div>
            <div class="body-card">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-report d-flex justify-content-start">This Year’s Income</div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 finance-report d-flex justify-content-start">Rp. 100.000.000.000</div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 period d-flex justify-content-start">+10% Last Year</div>
             </div>
        </div>
</template>

<script>
export default {
  name: 'CardAnnualIncome'
}
</script>

<style scoped>
.card {
    border: none;
}
.card.annual-income {
    margin: 17px;
    flex-basis: 30%;
    background-image: linear-gradient(30deg,rgba(255, 255, 255, 0.712), rgba(170, 132, 200, 0.726));
    box-shadow: 2px 5px 5px rgba(170, 132, 200, 0.726);
}
.shape-effect .radial1{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.shape-effect .radial2{
    position: absolute;
    right: 30px;
    top: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.shape-effect .radial3{
    position: absolute;
    right: 50px;
    top: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.219);
}
.card .body-card{
    padding: 15px;
    margin-top: 40px;
    margin-bottom: 30px;
}
.finance-report{
    font-family: 'Airbnb Cereal App Extra Bold', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
}
@media screen and (max-width: 933px) {
    .card.annual-income {
        flex-basis: 40%;
    }
  }

@media screen and (max-width: 690px) {
    .card.annual-income {
        margin: 20px;
        flex-basis: 40%;
    }
    .finance-report{
    font-family: 'Airbnb Cereal App Extra Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    }
  }

@media screen and (max-width: 480px) {
    .card.annual-income {
        margin: 20px;
        flex-basis: 100%;
    }
    .finance-report{
    font-family: 'Airbnb Cereal App Extra Bold', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
}
  }
</style>
