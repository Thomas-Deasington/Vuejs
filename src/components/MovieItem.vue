<template>
  <div class="movie" v-on:click="viewInfo()" v-if="movie!=null">
        <img v-bind:src="movie.image"><br>
        <p v-if="movie.image==null">Pas d'image disponible</p>
        <p class="note" v-if="movie.note != null">Note : {{ movie.note }}/5</p>
        <h3>{{ movie.titre }} - {{ movie.sortie }}</h3>
        <span v-if="movie.display">
            <p>Langue du film : {{ movie.langue }} </p>
            <p>Genre du film : {{ movie.genre }} </p>
            <h3><u>Réalisateur</u> : {{ movie.realisateur }}</h3>
            <p>Nationalité : {{ movie.nationalite }}</p>
            <p>Date de naissance : {{ movie.birthDate }}</p>
            <a v-on:click="deleteMovie()">Supprimer</a>
        </span>
    </div>  
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: Array,
    index: String
  },
  methods: {
    deleteMovie() {
        this.$emit('delete', this.index);
    },
    viewInfo() {
      this.movie.display = !this.movie.display;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie {
    margin-top: 20px;
    margin-bottom: 20px;
}

img {
    max-height: 30%;
    max-width: 20%;
}
</style>
