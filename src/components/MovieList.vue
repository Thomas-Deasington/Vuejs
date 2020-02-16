<template>
    <div>
        <div v-if="display">
            <p>
                   
                <input v-model="inputFilter">
                <button v-on:click="filter()">Chercher</button>
                <span v-if="displayReset">
                    <button v-on:click="resetList()">Liste de tous les films</button>
                </span>
            </p>
            <p>
                {{ movie_list.length }} film(s) dans la liste
            </p>
            <div class="movies" v-for="(m, index) in movie_list" v-bind:key="m.titre" v-on:click="viewInfo(index)">
                <MovieItem v-bind:movie="m" v-bind:id="index" v-on:delete="deleteMovie(index)" />
            </div>
            <a id="addMovie" v-on:click="addDisplay()" v-if="displayButton" href="#form">Ajouter un film</a>
            <MovieAdd v-bind:genre="this.genre" v-on:add="addMovie" v-if="displayAdd"/>
        </div>
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue';
import MovieAdd from './MovieAdd.vue';

export default {
  name: 'movieList',
  components: {
    MovieItem,
    MovieAdd
  },
  data() {
    return{
        display: true,
        displayAdd: false,
        displayButton: true,
        filterGenre:"Aucun",
        counter: 0,
        genre: [{
            nom: "Aucun"
        },
        {
            nom: "Action"
        },
        {
            nom: "Comédie"
        },
        {
            nom: "Drame"
        },
        {
            nom: "Historique"
        },
        {
            nom: "Policier"
        },
        {
            nom: "Science-fiction"
        },
        {
            nom: "Horreur"
        },
        {
            nom: "Documentaire"
        },
        {
            nom: "Fantaisie"
        }],
        movie_list: [{
            image: "https://fr.web.img6.acsta.net/pictures/19/10/22/10/17/3326733.jpg",
            note: 3,
            titre: "Star Wars, épisode IX : L'Ascension de Skywalker",
            sortie: 2019,
            genre: "Science-fiction",
            realisateur: "J. J. Abrams",
            nationalite: "Américaine",
            langue: "Anglais",
            birthDate: "27/06/1966",
            display: false
        },
        {
            image: "https://img4.cdn.cinoche.com/images/38ffd34127dedeb44a9a0ca46d52be40.jpg",
            note: 4.5,
            titre: "Parasite",
            sortie: 2019,
            genre: "Drame",
            realisateur: "Bong Joon-ho",
            nationalite: "Coréenne",
            langue: "Coréen",
            birthDate: "14/09/1969",
            display: false
        },
        {
            image: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/36/71/chihiro.jpg",
            note: 5,
            titre: "Le Voyage de Chihiro",
            sortie: 2001,
            genre: "Fantaisie",
            realisateur: "Hayao Miyazaki",
            nationalite: "Japonaise",
            langue: "Français",
            birthDate: "05/01/1941",
            display: false
        },
        {
            image: "https://fr.web.img4.acsta.net/pictures/16/10/24/15/52/414639.jpg",
            note: 4,
            titre: "Premier contact",
            sortie: 2016,
            genre: "Drame",
            realisateur: "Denis Villeneuve",
            nationalite: "Canadienne",
            langue: "Français",
            birthDate: "03/10/1967",
            display: false
        }],
        baseList:"",
        inputFilter:"",
        displayReset: false
    }
    },
    mounted () {
        this.baseList = this.movie_list;
    },
    methods: {
        increment() {
            this.counter++;
        },
        addDisplay(){
            this.displayAdd = !this.displayAdd;
            this.displayButton = !this.displayButton;
        },
        addMovie(addBirthDate, addLangue, addTitre, addSortie, addImage, addRealisateur, addNationalite, addGenre) {
            this.movie_list.push({
                titre: addTitre,
                sortie: addSortie,
                image: addImage,
                langue: addLangue,
                realisateur: addRealisateur,
                nationalite: addNationalite,
                birthDate: addBirthDate,
                genre: addGenre,
                display: false
            });
            this.displayAdd = !this.displayAdd;
            this.displayButton = !this.displayButton;
        },
        deleteMovie(index) {
            this.movie_list.splice(index, 1);
        },
        filter() {
            this.movie_list = this.baseList;
            const filterValue = this.inputFilter.toLowerCase();
            const filter = movie => 
                movie.titre.toLowerCase().includes(filterValue) ||
                movie.realisateur.toLowerCase().includes(filterValue) ||
                movie.sortie.toString().includes(filterValue);
            this.movie_list = this.movie_list.filter(filter);
            this.displayReset = true;
            this.inputFilter="";
        },
        resetList() {
            this.movie_list = this.baseList;
            this.displayReset = false;
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.movies {
    border: 1px solid gray;
    background-color: lightgray;
    margin-bottom: 10px;
    border-radius: 10px;
}

.movie {
    margin-top: 20px;
    margin-bottom: 20px;
}

a {
  color: #42b983;
  font-size: 150%;
}

button {
    background-color: lightgray;
    border: 1px solid black;
    margin-left: 1%; 
}

input {
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
}
#addMovie{
    display:inline-block;
    padding:0.5em 3em;
    border:0.16em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    text-align:center;
    transition: all 0.15s;
}
#addMovie:hover{
    color:#000000;
    border-color:#000000;
}

</style>
