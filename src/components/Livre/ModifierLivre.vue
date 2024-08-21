<template>
  <div v-if="livreSelectionne" class="container mt-5">
    <h2>Modifier un Livre</h2>
    <form @submit.prevent="modifierLivre">
      <div class="form-group">
        <input v-model="livreSelectionne.title" type="text" placeholder="Titre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="livreSelectionne.author" type="text" placeholder="Auteur" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="livreSelectionne.date_publication" type="date" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="livreSelectionne.genre" type="text" placeholder="Genre" class="form-control mt-2" required />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-warning mt-2">Modifier Livre</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const livreSelectionne = ref(null);
const route = useRoute();
const router = useRouter();

const chargerLivre = () => {
  const livres = JSON.parse(localStorage.getItem('livres')) || [];
  const id = route.params.id; // Utilise l'ID du livre
  livreSelectionne.value = livres.find(livre => livre.id === id) || null;
};

const modifierLivre = () => {
  const livres = JSON.parse(localStorage.getItem('livres')) || [];
  const id = route.params.id;
  const index = livres.findIndex(livre => livre.id === id);
  if (index !== -1) {
    livres[index] = { ...livreSelectionne.value };
    localStorage.setItem('livres', JSON.stringify(livres));
  }
  router.push('/Livre'); // Redirection vers la liste des livres après modification
};

const annuler = () => {
  router.push('/Livre'); // Redirection vers la liste des livres sans enregistrer les modifications
};

onMounted(chargerLivre);
</script>
