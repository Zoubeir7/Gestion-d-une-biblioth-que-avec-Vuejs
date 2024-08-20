<!-- Membres.vue -->
<template>
  <div class="container mt-5">
    <h2>Gestion des Membres</h2>
    <form @submit.prevent="ajouterMembre" class="mb-4">
      <div class="form-group">
        <input v-model="nouveauMembre.name" type="text" placeholder="Nom" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauMembre.email" type="email" placeholder="Email" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <select v-model="nouveauMembre.genre" class="form-control mt-2" required>
          <option disabled value="">Sélectionnez le genre</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Ajouter Membre</button>
    </form>

    <hr />

    <h3>Liste des Membres</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <td>{{ membre.name }}</td>
          <td>{{ membre.email }}</td>
          <td>{{ membre.genre }}</td>
          <td>
            <i @click="voirDetails(index)" class="fas fa-eye text-info" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="modifierMembres(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerMembres(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Afficher les détails du membre sous forme de tableau -->
    <div v-if="membreSelectionne !== null" class="mt-4">
      <h4>Détails du Membre</h4>
      <table class="table table-primary table-borderless">
        <tr>
          <th>Nom</th>
          <td>{{ membres[membreSelectionne].name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ membres[membreSelectionne].email }}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>{{ membres[membreSelectionne].genre }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const membres = ref([]);
const nouveauMembre = ref({ name: '', email: '', genre: '' });
const membreSelectionne = ref(null);

const chargerMembres = () => {
  const data = localStorage.getItem('membres');
  if (data) membres.value = JSON.parse(data);
};

const ajouterMembre = () => {
  membres.value.push({ ...nouveauMembre.value });
  localStorage.setItem('membres', JSON.stringify(membres.value));
  nouveauMembre.value = { name: '', email: '', genre: '' };
};

const supprimerMembres = (index) => {
  membres.value.splice(index, 1);
  localStorage.setItem('membres', JSON.stringify(membres.value));
  membreSelectionne.value = null;
};

const voirDetails = (index) => {
  membreSelectionne.value = index;
};

const modifierMembres = (index) => {
  nouveauMembre.value = { ...membres.value[index] };
  membres.value.splice(index, 1); 
  membreSelectionne.value = null;
};

onMounted(chargerMembres);
</script>
