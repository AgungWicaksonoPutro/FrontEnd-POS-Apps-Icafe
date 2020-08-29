<template>
    <div>
    <Navbar/>
    <router-view/>
    </div>
</template>

<script>
import Navbar from '../../components/_base/Navbar'
export default {
  name: 'Main',
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
