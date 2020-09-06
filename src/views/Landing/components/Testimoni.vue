<template>
    <section id="testimoni" class="mt-5 mb-5 mx-auto">
        <div class="container">
        <h4 class="title-section text-center py-5 px-5">Testimonials Satisfied Customer</h4>
        <!-- Carousel -->
        <div id="review-customer" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <!-- items -->
                <div class="carousel-item active">
                    <blockquote class="blockquote text-center mx-5 px-5">
                        <p class="lead">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus dolorem fugit nulla debitis id.
                        </p>
                        <footer >
                            <div class="avatar">
                                <img src="../../../assets/avatar.png" alt="avatar">
                            </div>
                        </footer>
                    </blockquote>
                </div>
                <div class="carousel-item">
                    <blockquote class="blockquote text-center mx-5 px-5">
                        <p class="lead">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus dolorem fugit nulla debitis id.
                        </p>
                        <footer>
                            <div class="avatar">
                                <img src="../../../assets/avatar1.png" alt="avatar">
                            </div>
                        </footer>
                    </blockquote>
                </div>
                <!-- Kontrol Carousel -->
                <a class="carousel-control-prev" href="#review-customer" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#review-customer" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Testimoni'
}
</script>

<style scoped>
.avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid rgb(255, 246, 246);
    box-shadow: 2px 2px 5px rgb(175, 175, 175);
    vertical-align: middle;
    margin-bottom: 20px;
}
</style>
