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
      <button type="submit" class="btn btn-warning mt-2">Modifier Livre</button>
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
  const index = route.params.index;
  livreSelectionne.value = { ...livres[index] };
};

const modifierLivre = () => {
  const livres = JSON.parse(localStorage.getItem('livres')) || [];
  const index = route.params.index;
  livres[index] = { ...livreSelectionne.value };
  localStorage.setItem('livres', JSON.stringify(livres));
  router.push('/Livre'); // Redirection vers la liste des livres après modification
};

onMounted(chargerLivre);
</script>
