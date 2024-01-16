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
          <div class="card" style="width: 260px">
            <b-nav-item
              ><b-link :to="{ name: 'Tienda de juguetes' }"
                >Tienda de juguetes</b-link
              >
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina2' }">Electrónicos</b-link>
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }">Juegos de video</b-link>
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }">Estufas</b-link>
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }"
                >Detergentes industriales
              </b-link>
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }">Productos de limpieza </b-link>
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }">
                Tienda de productos para el hogar</b-link
              >
            </b-nav-item>

            <b-nav-item
              ><b-link :to="{ name: 'pagina3' }"
                >Tienda de electrodomésticos
              </b-link>
            </b-nav-item>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>


