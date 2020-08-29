<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
@font-face {
font-family: 'Airbnb Cereal App Book';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Book'), url('../src/assets/font/AirbnbCerealBook.woff') format('woff');
}

@font-face {
font-family: 'Airbnb Cereal App Light';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Light'), url('../src/assets/font/AirbnbCerealLight.woff') format('woff');
}

@font-face {
font-family: 'Airbnb Cereal App Medium';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Medium'), url('../src/assets/font/AirbnbCerealMedium.woff') format('woff');
}

@font-face {
font-family: 'Airbnb Cereal App Bold';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Bold'), url('../src/assets/font/AirbnbCerealBold.woff') format('woff');
}

@font-face {
font-family: 'Airbnb Cereal App Extra Bold';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Extra Bold'), url('../src/assets/font/AirbnbCerealExtraBold.woff') format('woff');
}

@font-face {
font-family: 'Airbnb Cereal App Black';
font-style: normal;
font-weight: normal;
src: local('Airbnb Cereal App Black'), url('../src/assets/font/AirbnbCerealBlack.woff') format('woff');
}

#app {
  font-family: 'Airbnb Cereal App Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
