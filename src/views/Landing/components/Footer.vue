<template>
    <footer class="footer py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                      </ul>
                      <span>Copyright &copy; Bootcamp Arkademy Web 2</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
    background-image: linear-gradient(rgba(255, 255, 255, 0.521), rgb(255, 225, 159));
}

.footer .fab {
    color: var(--warning);
    font-size: 30px;
    margin: 10px;
}
</style>
