<template>
<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary d-flex justify-content-between">
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
    <div class="container bg-primary">
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
        <!-- Left links with space -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3"> <!-- Applied 'ms-3' here -->
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

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/src/assets/u.jpg" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/b.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/c.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<RouterView />  

<!-- <ListerLivre /> -->

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';


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

.nav-link{
  color: #e9ecef;
  font-weight: bold;
}


.carousel-item {
  height: 40vh;
}
</style>