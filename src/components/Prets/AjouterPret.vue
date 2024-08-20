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
      <button type="submit" class="btn btn-primary mt-4">Ajouter Prêt</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauPret = ref({ membre: '', livre: '', date: '' });
const router = useRouter();

const ajouterPret = () => {
  const prets = JSON.parse(localStorage.getItem('prets')) || [];
  prets.push({ ...nouveauPret.value });
  localStorage.setItem('prets', JSON.stringify(prets));
  nouveauPret.value = { membre: '', livre: '', date: '' };
  router.push('/ListePrets'); // Redirection vers la liste des prêts après ajout
};
</script>
