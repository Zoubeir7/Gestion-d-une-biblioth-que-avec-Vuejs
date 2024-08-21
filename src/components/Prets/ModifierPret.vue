<template>
  <div class="container mt-5">
    <h2>Modifier Prêt</h2>
    <form @submit.prevent="modifierPret" class="mb-4">
      <div class="form-group">
        <input v-model="pretModifie.membre" type="text" placeholder="Nom du membre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="pretModifie.livre" type="text" placeholder="Titre du livre" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="pretModifie.date" type="date" class="form-control mt-2" required />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-warning mt-2">Modifier Prêt</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const pretModifie = ref({ membre: '', livre: '', date: '' });
const route = useRoute();
const router = useRouter();

const chargerPret = () => {
  const prets = JSON.parse(localStorage.getItem('prets')) || [];
  const index = route.params.index;
  pretModifie.value = { ...prets[index], index };
};

const modifierPret = () => {
  const prets = JSON.parse(localStorage.getItem('prets')) || [];
  prets[pretModifie.value.index] = { ...pretModifie.value };
  localStorage.setItem('prets', JSON.stringify(prets));
  router.push('/Prets'); // Redirection vers la liste des prêts après modification
};

const annuler = () => {
  router.push('/Prets'); // Redirection vers la liste des prêts sans enregistrer les modifications
};

chargerPret();
</script>
