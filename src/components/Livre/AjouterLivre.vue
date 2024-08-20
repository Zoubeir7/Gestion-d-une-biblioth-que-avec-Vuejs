<template>
    <div>
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
        <button type="submit" class="btn btn-success mt-2">Ajouter Livre</button>
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
  </script>
  