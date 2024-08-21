<template>
  <div class="container mt-5">
    <h2>Ajouter un Nouveau Prêt</h2>
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
      <div class="d-flex justify-content-between">
        <button @click="ajouterPret" class="btn btn-success mt-2">Enregistrer</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauPret = ref({ membre: '', livre: '', date: '' });
const router = useRouter();

const ajouterPret = () => {
  // Vérifie si tous les champs sont remplis
  if (!nouveauPret.value.membre || !nouveauPret.value.livre || !nouveauPret.value.date) {
    alert('Veuillez remplir tous les champs');
    return; // Arrête la fonction si un champ est vide
  }

  // Si tous les champs sont remplis, continue avec l'ajout
  const prets = JSON.parse(localStorage.getItem('prets')) || [];
  prets.push({ ...nouveauPret.value });
  localStorage.setItem('prets', JSON.stringify(prets));
  nouveauPret.value = { membre: '', livre: '', date: '' }; // Réinitialiser les champs
  router.push('/Prets'); // Redirection vers la liste des prêts après ajout
};

const annuler = () => {
  router.push('/Prets'); // Redirection vers la liste des prêts sans enregistrer
};
</script>
