<script setup>
import { ref } from 'vue';
import router from "../router/index";

const items = ref([
  {
    text: "Tienda de juguetes",
    href: "/juguetes",
  },
  {
    text: "Electrónicos",
    href: "/electronicos",
  },
  {
    text: "JuegosVideo",
    href: "/juegosvideo",
  },
  {
    text: "Estufas",
    href: "/estufas",
  },
  {
    text: "Detergentes",
    href: "/detergentes",
  },
  {
    text: "ProductosLimpieza",
    href: "/productoslimpieza",
  },
  {
    text: "TiendaProductosHogar",
    href: "/tiendaproductoshogar",
  },
  {
    text: "TiendaElectrodomesticos",
    href: "/tiendaelectrodomesticos",
  }
]);
</script>

<template>
    <div>
        <!-- Navbar -->
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" disabled>MX</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link to="/inicio" tag="b-nav-item">Inicio</router-link>
                    <router-link to="/pagina2" tag="b-nav-item">Página 2</router-link>
                    <router-link to="/pagina3" tag="b-nav-item">Página 3</router-link>
                    <router-link to="/juguetes" tag="b-nav-item"
                        active-class="bg-secondary text-white">Electrónicos</router-link>
                </b-navbar-nav>
            </b-collapse>
            <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        </b-navbar>

        <!-- Sidebar -->
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
        <div>
            <h1>Electrónicos</h1>
            <p>asa</p>
        </div>
    </div>
</template>

