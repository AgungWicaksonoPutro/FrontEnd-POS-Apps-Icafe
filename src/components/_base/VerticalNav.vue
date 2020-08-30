<template>
    <nav class="nav flex-column">
        <a class="nav-link active mx-auto mb-3 mt-3 fork" href="#"></a>
        <a class="nav-link mx-auto mb-3 mt-2  clipboard" href="#"></a>
        <a class="nav-link mx-auto mb-3 mt-2  add" href="#"></a>
    </nav>
</template>

<script>
export default {
  name: 'VerticalNav'
}
</script>

<style scoped>
.nav{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.fork{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/fork.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.clipboard{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/clipboard.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.add{
    width: 35px;
    height: 35px;
    background-image: url('../../assets/add.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
