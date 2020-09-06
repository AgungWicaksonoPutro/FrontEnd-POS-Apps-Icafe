<template>
    <nav class="navbar navbar-expand-lg navbar-light col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="container d-flex align-items-center">
            <!-- Logo Brand -->
            <a href="#" class="navbar-brand">
                <img src="../../../assets/LogoIcafe.png" alt="Logo">
            </a>

             <!-- Toggler Navbar -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapse Menu -->
            <div class="collapse navbar-collapse justify-content-end text-right" id="menu">
                <ul class="navbar-nav mr-5">
                    <li class="nav-item active mr-3"><a class="nav-link" href="#shop">Service</a></li>
                    <li class="nav-item mr-3"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item mr-3"><a class="nav-link" href="#help">Help</a></li>
                </ul>
                <ul class="navbar-nav mr-5">
                    <li class="nav-item mr-3"><a class="nav-link" href="#">+620918769666</a></li>
                </ul>
                <ul class="navbar-nav mr-5">
                    <li class="nav-item mr-3"><router-link :to="{name: 'Login'}" class="router-link nav-link">Log In</router-link></li>
                    <li class="nav-item mr-3"><a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
    background-color: #FCD88C;
}
.navbar-brand{
    width: 80px;
    height: 80px;
}
.navbar-brand img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.router-link{
  text-decoration: none;
  color: inherit;
}
</style>
