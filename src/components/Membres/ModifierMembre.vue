<template>
  <div class="container mt-5">
    <h2>Modifier Membre</h2>
    <form @submit.prevent="modifierMembre" class="mb-4">
      <div class="form-group">
        <input v-model="membreModifie.name" type="text" placeholder="Nom" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="membreModifie.email" type="email" placeholder="Email" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <select v-model="membreModifie.genre" class="form-control mt-2" required>
          <option disabled value="">Sélectionnez le genre</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-warning mt-2">Modifier Membre</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const membreModifie = ref({ name: '', email: '', genre: '' });
const route = useRoute();
const router = useRouter();

const chargerMembre = () => {
  const membres = JSON.parse(localStorage.getItem('membres')) || [];
  const index = route.params.index;
  membreModifie.value = { ...membres[index], index };
};

const modifierMembre = () => {
  const membres = JSON.parse(localStorage.getItem('membres')) || [];
  membres[membreModifie.value.index] = { ...membreModifie.value };
  localStorage.setItem('membres', JSON.stringify(membres));
  router.push('/Membres'); // Redirection vers la liste des membres après modification
};

const annuler = () => {
  router.push('/Membres'); // Redirection vers la liste des membres sans enregistrer les modifications
};

chargerMembre();
</script>
