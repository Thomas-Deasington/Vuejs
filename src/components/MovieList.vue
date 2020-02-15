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
                <div class="movie">
                    <img v-bind:src="m.image"><br>
                    <p class="note">Note : {{ m.note }}/5</p>
                    <h3>{{ m.titre }} - {{ m.sortie }}</h3>
                    <span v-if="m.display">
                        <p>Langue du film : {{ m.langue }} </p>
                        <h3><u>Réalisateur</u> : {{ m.realisateur }}</h3>
                        <p>Nationalité : {{ m.nationalite }}</p>
                        <p>Date de naissance : {{ m.birthDate }}</p>
                        <a v-on:click="deleteMovie(index)">Supprimer</a>
                    </span>
                </div>
            </div>
            <div id="form">
                <table>
                    <tbody>
                        <h3>Film</h3>
                        <tr>
                            <td>
                                <label>Titre :</label>
                            </td>
                            <td>
                                <input v-model="newTitle" placeholder="Nom du film">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Année de sortie :</label>
                            </td>
                            <td>
                                <input v-model="newSortie" placeholder="2010">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Lien d'une image du film :</label>
                            </td>
                            <td>
                                <input v-model="newSortie" placeholder="https://blabla.jpg">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Langue :</label>
                            </td>
                            <td>
                                <input v-model="newLangue" placeholder="Anglais, Français...">
                            </td>
                        </tr>
                        <h3>Réalisateur</h3>
                        <tr>
                            <td>
                                <label>Nom & prénom :</label>
                            </td>
                            <td>
                                <input v-model="newName" placeholder="Nom Prénom">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Nationalité :</label>
                            </td>
                            <td>
                                <input v-model="newNationalite" placeholder="Américaine, Anglaise...">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Date de naissance :</label>
                            </td>
                            <td>
                                <input type="date" v-model="newBirthDate">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button v-on:click="addMovie()">Ajouter le film à la liste</button>
                <p id="error"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'movieItem',
  data() {
    return{
       message: "Hello world !",
        newSerieText: '',
        newSerieTextChercher: '',
        selected: 'Titre',
        display: true,
        counter: 0,
        movie_list: [{
            image: "https://fr.web.img6.acsta.net/pictures/19/10/22/10/17/3326733.jpg",
            note: 3,
            titre: "Star Wars, épisode IX : L'Ascension de Skywalker",
            sortie: 2019,
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
            realisateur: "Denis Villeneuve",
            nationalite: "Canadienne",
            langue: "Français",
            birthDate: "03/10/1967",
            display: false
        }],
        newMovie:"",
        inputFilter:"",
        displayReset: false
    }
    },
    methods: {
        increment() {
            this.counter++;
        },
        addMovie() {
            if(this.newTitle == null || this.newSortie == null || this.newLangue == null || this.newName == null || this.newNationalite == null || this.newBirthDate == null){
                document.getElementById("error").textContent="Remplissez les champs";
            }
            else {
                let annee = parseInt(this.newSortie);
                if(Number.isInteger(annee)){
                    let birthDate = this.newBirthDate.replace(/-/g,"/");
                    this.movie_list.push({
                    titre: this.newTitle,
                    sortie: this.newSortie,
                    langue: this.newLangue,
                    realisateur: this.newName,
                    nationalite: this.newNationalite,
                    birthDate: birthDate,
                    display: false
                    });
                    this.newLangue="";
                    this.newTitle="";
                    this.newSortie="";
                    this.newName="";
                    this.newNationalite="";
                    this.newBirthDate="";
                    document.getElementById("error").textContent=""
                }
                else {
                    document.getElementById("error").textContent="L'année de sortie doit être une année"
                }
                
            }
            
        },
        deleteMovie(index) {
            this.movie_list.splice(index, 1);
        },
        viewInfo(index) {
            this.movie_list[index].display = !this.movie_list[index].display;
        },
        filter() {
            this.baseList = this.movie_list;
            this.movie_list = this.movie_list.filter(m => m.titre == this.inputFilter);
            

            // if(this.filterChoice == "title") {
            //     this.movie_list = this.movie_list.filter(m => m.titre == this.inputFilter);
            // } else if(this.filterChoice == "sortie") {
            //     this.movie_list = this.movie_list.filter(m => m.sortie == this.inputFilter);
            // } else if(this.filterChoice == "real") {
            //     this.movie_list = this.movie_list.filter(m => m.realisateur == this.inputFilter);
            // }
            this.displayReset = true;
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

input {
    background-color: white;
    border: 1px black solid;
    margin-bottom: 10px;
}

button {
    background-color: lightgray;
    border: 1px solid black;
    margin-left: 1%; 

}

#form {
    border: color 1px solid black;
    margin-top: 20%;
    background-color: white;
}

table {
    margin-left:auto; 
    margin-right:auto;
    margin-bottom: 5px;
}

#error {
    font-size: 20px;
    color: red;
}

img {
    max-height: 30%;
    max-width: 20%;
}

.note {
    font-size: 140%;
}

</style>
