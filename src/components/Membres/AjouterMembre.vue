<template>
  <div class="container mt-5">
    <h2>Ajouter un Nouveau Membre</h2>
    <form @submit.prevent="ajouterMembre" class="mb-4">
      <div class="form-group">
        <input v-model="nouveauMembre.name" type="text" placeholder="Nom" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <input v-model="nouveauMembre.email" type="email" placeholder="Email" class="form-control mt-2" required />
      </div>
      <div class="form-group">
        <select v-model="nouveauMembre.genre" class="form-control mt-2" required>
          <option disabled value="">Sélectionnez le genre</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div>
      <div class="d-flex justify-content-between">
        <button @click="ajouterMembre" class="btn btn-success mt-2">Enregistrer</button>
        <button @click="annuler" type="button" class="btn btn-secondary mt-2">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nouveauMembre = ref({ name: '', email: '', genre: '' });
const router = useRouter();

const ajouterMembre = () => {
  // Vérifie si tous les champs sont remplis
  if (!nouveauMembre.value.name || !nouveauMembre.value.email || !nouveauMembre.value.genre) {
    alert('Veuillez remplir tous les champs');
    return; // Arrête la fonction si un champ est vide
  }

  // Si tous les champs sont remplis, continue avec l'ajout
  const membres = JSON.parse(localStorage.getItem('membres')) || [];
  membres.push({ ...nouveauMembre.value });
  localStorage.setItem('membres', JSON.stringify(membres));
  nouveauMembre.value = { name: '', email: '', genre: '' }; // Réinitialiser les champs
  router.push('/Membres'); // Redirection vers la liste des membres après ajout
};

const annuler = () => {
  router.push('/Membres'); // Redirection vers la liste des membres sans enregistrer
};
</script>
