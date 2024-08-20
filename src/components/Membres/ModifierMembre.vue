<!-- ModifierMembre.vue -->
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
      <button type="submit" class="btn btn-primary mt-4">Modifier Membre</button>
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
  router.push('/ListeMembres'); // Redirection vers la liste des membres après modification
};

chargerMembre();
</script>
