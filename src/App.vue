<template>
  <div id="app">
      <v-app>
        <v-container>
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Bienvenue dans votre liste de film !"/>
          <MovieList/>
        </v-container>
      </v-app>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import MovieList from './components/MovieList.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      MovieList
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-image: url("./assets/background.jpg");
  }
</style>
