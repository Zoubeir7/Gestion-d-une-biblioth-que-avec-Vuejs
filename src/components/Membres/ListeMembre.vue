<!-- ListerMembres.vue -->
<template>
  <div class="container mt-5">
    <h2>Liste des Membres</h2>

    <!-- Bouton pour ajouter un nouveau membre -->
    <button @click="naviguerAjouterMembre" class="btn btn-success mb-3">
      Ajouter un Membre
    </button>

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
            <i @click="naviguerModifierMembre(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerMembre(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
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
import { useRouter } from 'vue-router';

const membres = ref([]);
const membreSelectionne = ref(null);
const router = useRouter();

const chargerMembres = () => {
  const data = localStorage.getItem('membres');
  if (data) membres.value = JSON.parse(data);
};

const supprimerMembre = (index) => {
  membres.value.splice(index, 1);
  localStorage.setItem('membres', JSON.stringify(membres.value));
  membreSelectionne.value = null;
};

const voirDetails = (index) => {
  membreSelectionne.value = index;
};

const naviguerAjouterMembre = () => {
  router.push('/AjouterMembre');
};

const naviguerModifierMembre = (index) => {
  router.push({ path: `/ModifierMembre/${index}` });
};

onMounted(chargerMembres);
</script>
