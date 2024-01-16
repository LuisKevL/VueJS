<script setup>
import router from "../router/index";
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
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
        </div>
      </b-sidebar>
    </div>
    <div class="cardd" style="padding: 10px">
      <b-card
        title="Página 3"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <div class="card" style="width: 150px">
      <b-nav-item
        ><b-link :to="{ name: 'inicio' }"> Inicio </b-link>
      </b-nav-item>

      <b-nav-item
        ><b-link :to="{ name: 'pagina2' }">Página 2</b-link>
      </b-nav-item>

      <b-nav-item
        ><b-link :to="{ name: 'pagina3' }">Página 3</b-link>
      </b-nav-item>
    </div>
  </div>
</template>


