<template>
  <div class="container mt-5">
    <h2>Ajouter un Nouveau Livre</h2>
    <form @submit.prevent="ajouterLivre">
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
      <div class="d-flex justify-content-between">
        <button @click="ajouterLivre" class="btn btn-success mt-2">Enregistrer</button>
        <button @click="annuler" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauLivre = ref({
  title: '',
  author: '',
  date_publication: '',
  genre: ''
});

const router = useRouter();

const ajouterLivre = () => {
  const livres = JSON.parse(localStorage.getItem('livres')) || [];
  livres.push({ ...nouveauLivre.value });
  localStorage.setItem('livres', JSON.stringify(livres));
  router.push('/Livre'); // Redirection vers la liste des livres après ajout
};

const annuler = () => {
  router.push('/Livre'); // Redirection vers la liste des livres sans ajout
};
</script>
