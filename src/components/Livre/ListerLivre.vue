<!-- Livres.vue -->
<template>
  <div class="container mt-5">
    <h2>Gestion des Livres</h2>
    <form @submit.prevent="ajouterLivre" class="mb-4">
      <div class="form-group">
        <input v-model="nouveauLivre.title" type="text" placeholder="Titre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauLivre.author" type="text" placeholder="Auteur" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauLivre.date_publication" type="date" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauLivre.genre" type="text" placeholder="Genre" class="form-control mt-2" required />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Ajouter Livre</button>
    </form>

    <hr />

    <h3>Liste des Livres</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Date de publication</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in livres" :key="index">
          <td>{{ livre.title }}</td>
          <td>{{ livre.author }}</td>
          <td>{{ livre.date_publication }}</td>
          <td>{{ livre.genre }}</td>
          <td>
            <i @click="voirDetails(index)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="modifierLivre(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerLivre(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const livres = ref([]);
const nouveauLivre = ref({ title: '', author: '', date_publication: '', genre: '' });

const chargerLivres = () => {
  const data = localStorage.getItem('livres');
  if (data) livres.value = JSON.parse(data);
};

const ajouterLivre = () => {
  livres.value.push({ ...nouveauLivre.value });
  localStorage.setItem('livres', JSON.stringify(livres.value));
  nouveauLivre.value = { title: '', author: '', date_publication: '', genre: '' };
};

const supprimerLivre = (index) => {
  livres.value.splice(index, 1);
  localStorage.setItem('livres', JSON.stringify(livres.value));
};

const voirDetails = (index) => {
  alert(`Titre: ${livres.value[index].title}\nAuteur: ${livres.value[index].author}`);
};
const modifierLivre = (index) => {
  nouveauLivre.value = { ...livres.value[index] };
  livres.value.splice(index, 1); // Supprime le livre pour le mettre à jour
  localStorage.setItem('livres', JSON.stringify(livres.value)); // Mise à jour du localStorage
};


onMounted(chargerLivres);
</script>
