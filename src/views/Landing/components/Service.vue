<template>
    <section id="service" class="bg-transparent mb-5 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="container row">
            <h4 class="title-section text-left">Services</h4>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                <div class="card-service bg-white rounded mb-3 shadow">
                    <div class="body-card d-flex justify-content-center align-items-center">
                        <div class="icon-service mr-3"><i class="fas fa-concierge-bell"></i></div>
                        <div class="service-name">Catering Service</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                <div class="card-service bg-white rounded mb-3 shadow">
                    <div class="body-card d-flex justify-content-center align-items-center">
                        <div class="icon-service mr-3"><i class="fas fa-mobile-alt"></i></div>
                        <div class="service-name">Online Boking</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                <div class="card-service bg-white rounded mb-3 shadow">
                    <div class="body-card d-flex justify-content-center align-items-center">
                        <div class="icon-service mr-3"><i class="fas fa-truck"></i></div>
                        <div class="service-name">Delivery Service</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'SectionService'
}
</script>

<style scoped>
.title-section{
    font-weight: bold;
    font-size: 24px;
}

#service {
    position: absolute;
    left: 75px;
    top: 700px;
    width: 70%;
}

.card-service {
    cursor: pointer;
}

.service-name {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
}

.icon-service {
    padding: 5px;
    font-size: 30px;
}
</style>
