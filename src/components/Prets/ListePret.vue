<!-- Prets.vue -->
<template>
  <div class="container mt-5">
    <h2>Gestion des Prêts</h2>
    <form @submit.prevent="ajouterPret" class="mb-4">
      <div class="form-group">
        <input v-model="nouveauPret.membre" type="text" placeholder="Nom du membre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauPret.livre" type="text" placeholder="Titre du livre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauPret.date" type="date" class="form-control mt-2" required />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Enregistrer Prêt</button>
    </form>

    <hr />

    <h3>Liste des Prêts</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Membre</th>
          <th>Livre</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="index">
          <td>{{ pret.membre }}</td>
          <td>{{ pret.livre }}</td>
          <td>{{ pret.date }}</td>
          <td>
            <i @click="voirDetails(index)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="modifierPrets(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerPrets(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Afficher les détails du prêt sous forme de tableau -->
    <div v-if="pretSelectionne !== null" class="mt-4">
      <h4>Détails du Prêt</h4>
      <table class="table table-primary table-borderless">
        <tr>
          <th>Membre</th>
          <td>{{ prets[pretSelectionne].membre }}</td>
        </tr>
        <tr>
          <th>Livre</th>
          <td>{{ prets[pretSelectionne].livre }}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{{ prets[pretSelectionne].date }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const prets = ref([]);
const nouveauPret = ref({ membre: '', livre: '', date: '' });
const pretSelectionne = ref(null);

const chargerPrets = () => {
  const data = localStorage.getItem('prets');
  if (data) prets.value = JSON.parse(data);
};

const ajouterPret = () => {
  prets.value.push({ ...nouveauPret.value });
  localStorage.setItem('prets', JSON.stringify(prets.value));
  nouveauPret.value = { membre: '', livre: '', date: '' };
};

const supprimerPrets = (index) => {
  prets.value.splice(index, 1);
  localStorage.setItem('prets', JSON.stringify(prets.value));
  pretSelectionne.value = null; 
};

const voirDetails = (index) => {
  pretSelectionne.value = index;
};

const modifierPrets = (index) => {
  nouveauPret.value = { ...prets.value[index] };
  prets.value.splice(index, 1); 
  pretSelectionne.value = null; 
  localStorage.setItem('prets', JSON.stringify(prets.value)); 
};

onMounted(chargerPrets);
</script>
