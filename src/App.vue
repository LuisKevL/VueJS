<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import router from "./router/index";
</script>
<template>
  <div class="App">
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de juguetes",
          href: "#/juguetes",
        },
        {
          text: "Electrónicos",
          href: "#",
          name: "",
        },
        {
          text: "Juegos de video",
          href: "#",
        },
        {
          text: "Estufas",
          href: "#",
        },
        {
          text: "Detergentes industriales",
          href: "#",
        },
        {
          text: "Productos de limpieza",
          href: "#",
        },
        {
          text: "Tienda de productos para el hogar",
          href: "#",
        },
        {
          text: "Tienda de electrodomésticos",
          href: "#",
        },
      ],
    };
  },
};
</script>
