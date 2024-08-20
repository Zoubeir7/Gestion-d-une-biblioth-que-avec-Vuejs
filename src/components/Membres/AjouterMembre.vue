<!-- AjouterMembre.vue -->
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
        <button type="submit" class="btn btn-primary mt-4">Ajouter Membre</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const nouveauMembre = ref({ name: '', email: '', genre: '' });
  const router = useRouter();
  
  const ajouterMembre = () => {
    const membres = JSON.parse(localStorage.getItem('membres')) || [];
    membres.push({ ...nouveauMembre.value });
    localStorage.setItem('membres', JSON.stringify(membres));
    nouveauMembre.value = { name: '', email: '', genre: '' };
    router.push('/ListeMembres'); // Redirection vers la liste des membres après ajout
  };
  </script>
  
