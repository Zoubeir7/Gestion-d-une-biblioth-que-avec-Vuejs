<!-- ModifierMembre.vue -->
<template>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

const membreModifie = ref({ name: '', email: '', genre: '' });
let membreIndex = -1;

const modifierMembre = () => {
  const membres = JSON.parse(localStorage.getItem('membres')) || [];
  if (membreIndex !== -1) {
    membres[membreIndex] = { ...membreModifie.value };
    localStorage.setItem('membres', JSON.stringify(membres));
    membreModifie.value = { name: '', email: '', genre: '' };
    membreIndex = -1;
  }
};

const chargerMembre = (index) => {
  const membres = JSON.parse(localStorage.getItem('membres')) || [];
  membreModifie.value = { ...membres[index] };
  membreIndex = index;
};

onMounted(() => {
  window.addEventListener('modifier-membre', (e) => {
    chargerMembre(e.detail);
  });
});
</script>
