<template>
<div>
    <header class="row no-gutters">
        <Navbar/>
        <Jumbotron/>
    </header>
    <main class="row no-gutters">
        <Service/>
        <About/>
        <Testimoni/>
        <Help/>
    </main>
    <Footer/>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Jumbotron from './components/jumbotron'
import Service from './components/Service'
import About from './components/About'
import Testimoni from './components/Testimoni'
import Help from './components/Help'
import Footer from './components/Footer'
export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Jumbotron,
    Service,
    About,
    Testimoni,
    Help,
    Footer
  }
}
</script>

<style scoped>
header{
    padding: 0;
}
</style>
