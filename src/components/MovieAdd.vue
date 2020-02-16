<template>
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
                        <label>Sélectionner un genre :</label>
                    </td>
                    <td>
                        <select v-model="filterGenre">
                            <option v-for="g in genre" v-bind:key="g.nom">{{ g.nom }}</option>
                        </select>
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
                        <input v-model="newImage" placeholder="https://blabla.jpg">
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
        <button v-on:click="addMovie()">Ajouter le film</button>
        <p id="error"></p>
    </div> 
</template>

<script>
export default {
  name: 'MovieAdd',
  props: {
    genre: Array
  },
  data () {
    return {
        filterGenre:"Aucun",
    }
  },
  methods: {
        addMovie() {
            if(this.newTitle == null || this.newSortie == null || this.newLangue == null || this.newName == null || this.newNationalite == null || this.newBirthDate == null || this.filterGenre == "Aucun"){
                document.getElementById("error").textContent="Remplissez les champs";
            }
            else {
                let annee = parseInt(this.newSortie);
                if(Number.isInteger(annee)){
                    let array = this.newBirthDate.split("-");
                    let addBirthDate = array[2]+"/"+array[1]+"/"+array[0];
                    let addTitre = this.newTitle;
                    let addSortie = this.newSortie;
                    let addImage = this.newImage;
                    let addLangue = this.newLangue;
                    let addRealisateur = this.newName;
                    let addNationalite = this.newNationalite;
                    let addGenre = this.filterGenre;
                    this.filterGenre="Aucun";
                    this.newLangue="";
                    this.newTitle="";
                    this.newSortie="";
                    this.newImage="";
                    this.newName="";
                    this.newNationalite="";
                    this.newBirthDate="";
                    document.getElementById("error").textContent="";
                    this.$emit('add', addBirthDate, addLangue, addTitre, addSortie, addImage, addRealisateur, addNationalite, addGenre);
                }
                else {
                    document.getElementById("error").textContent="L'année de sortie doit être une année"
                }
                
            }
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
}

select {
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
}
#form {
    border: color 1px solid black;
    margin-top: 20%;
    background-color: white;
}

#error {
    font-size: 20px;
    color: red;
}

tr {
    text-align: left;
}
table {
    margin-left:auto; 
    margin-right:auto;
    margin-bottom: 5px;
}
button {
    background-color: lightgray;
    border: 1px solid black;
    margin-left: 1%; 
}
</style>
