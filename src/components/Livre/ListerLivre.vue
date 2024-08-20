<template>
  <div>
    <h2>Liste des Livres</h2>

    <!-- Bouton pour ajouter un nouveau livre -->
    <button @click="naviguerAjouterLivre" class="btn btn-success mb-3">
      Ajouter un Livre
    </button>

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
            <i @click="naviguerModifierLivre(index)" class="fas fa-edit text-warning" style="cursor: pointer; margin-right: 8px;"></i>
            <i @click="supprimerLivre(index)" class="fas fa-trash text-danger" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Afficher les détails du livre sous forme de tableau -->
    <div v-if="livreSelectionne !== null" class="mt-4">
      <h4>Détails du Livre</h4>
      <table class="table table-primary table-borderless">
        <tr>
          <th>Titre</th>
          <td>{{ livres[livreSelectionne].title }}</td>
        </tr>
        <tr>
          <th>Auteur</th>
          <td>{{ livres[livreSelectionne].author }}</td>
        </tr>
        <tr>
          <th>Date de publication</th>
          <td>{{ livres[livreSelectionne].date_publication }}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>{{ livres[livreSelectionne].genre }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const livres = ref([]);
const livreSelectionne = ref(null);
const router = useRouter();

const chargerLivres = () => {
  const data = localStorage.getItem('livres');
  if (data) livres.value = JSON.parse(data);
};

const supprimerLivre = (index) => {
  livres.value.splice(index, 1);
  localStorage.setItem('livres', JSON.stringify(livres.value));
  livreSelectionne.value = null;
};

const voirDetails = (index) => {
  livreSelectionne.value = index;
};

const naviguerAjouterLivre = () => {
  router.push('/AjouterLivre');
};

const naviguerModifierLivre = (index) => {
  router.push({ path: `/ModifierLivre/${index}` });
};

onMounted(chargerLivres);
</script>
