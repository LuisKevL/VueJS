<script setup>
import { ref } from 'vue';
import router from "../router/index";

const items = ref([
  {
    text: "Tienda de juguetes",
    to: { name: 'juguetes' },
  },
  {
    text: "Electrónicos",
    to: { name: 'electronicos' },
  },
  {
    text: "JuegosVideo",
    to: { name: 'juegosvideo' },
  }
]);
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" disabled>MX</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/inicio">Inicio</b-nav-item>
          <b-nav-item href="#/pagina2">Página 2</b-nav-item>
          <b-nav-item href="#/pagina3">Página 3</b-nav-item>
          <!-- Iterar sobre los elementos de items -->
          <b-nav-item v-for="item in items" :key="item.text">
            <b-link :to="item.to">{{ item.text }}</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    </b-navbar>
    <div>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="px-3 py-2">
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros.
                </p>
                <div class="card" style="width: 260px">
                    <!-- Iterar sobre los elementos de items -->
                    <router-link v-for="item in items" :key="item.text" :to="item.href" tag="b-nav-item"
                        active-class="bg-secondary text-white">
                        {{ item.text }}
                    </router-link>
                </div>
            </div>
        </b-sidebar>
    </div>
  </div>
</template>
