import VueRouter from "vue-router";
import Vue from "vue";
import Inicio from "../components/Inicio.vue";
import Pagina2 from "../components/Pagina2.vue";
import Pagina3 from "../components/Pagina3.vue";
import Juguetes from "../components/Juguetes.vue";
import Electronicos from "../components/Electronicos.vue";
import JuegosVideo from "../components/JuegosVideo.vue";
import Error404 from '../views/ErrorPages/Error404.vue';
import Formulario from '../components/Formulario.vue';

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/inicio" },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      { path: "/inicio", name: "inicio", component: Inicio },
      { path: "/pagina2", name: "pagina2", component: Pagina2 },
      { path: "/pagina3", name: "pagina3", component: Pagina3 },
      { path: "/juguetes", name: "juguetes", component: Juguetes },
      { path: "/electronicos", name: "electronicos", component: Electronicos },
      { path: "/juegosvideo", name: "juegosvideo", component: JuegosVideo },
      { path: '/formulario', name: 'formulario', component: Formulario },
      { path: '*', component: Error404 },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
