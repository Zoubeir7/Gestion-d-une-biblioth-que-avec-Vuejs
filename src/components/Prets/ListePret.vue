<template>
  <div class="container mt-5">
    <h2>Liste des Prêts</h2>

    <!-- Bouton pour ajouter un nouveau prêt -->
    <button @click="naviguerAjouterPret" class="btn btn-success mb-3">
      Ajouter un Prêt
    </button>

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
            <i @click="naviguerModifierPret(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerPret(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
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
import { useRouter } from 'vue-router';

const prets = ref([]);
const pretSelectionne = ref(null);
const router = useRouter();

const chargerPrets = () => {
  const data = localStorage.getItem('prets');
  if (data) prets.value = JSON.parse(data);
};

const supprimerPret = (index) => {
  prets.value.splice(index, 1);
  localStorage.setItem('prets', JSON.stringify(prets.value));
  pretSelectionne.value = null;
};

const voirDetails = (index) => {
  pretSelectionne.value = index;
};

const naviguerAjouterPret = () => {
  router.push('/AjouterPret');
};

const naviguerModifierPret = (index) => {
  router.push({ path: `/ModifierPret/${index}` });
};

onMounted(chargerPrets);
</script>