<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
         <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="/src/assets/livre.png"
              height="40"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Livre">Livre</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Membres">Membres</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Prets">Préts</RouterLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>

<RouterView />  

<!-- <ListerLivre /> -->

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';
import ListerLivre from "./components/Livre/ListerLivre.vue";

</script>


<style scoped>
/* styles.css */
body {
  background-color: #f8f9fa;
  color: #212529;
}

.container {
  max-width: 900px;
}

.table {
  border-radius: 0.25rem;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
  background-color: #e9ecef;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.form-control {
  border-radius: 0.25rem;
}

</style>
