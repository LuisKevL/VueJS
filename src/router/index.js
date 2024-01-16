import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    //ruta base
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            }
        ]
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/pagina2',
                name: 'pagina2',
                component: () => import('../components/Pagina2.vue')
            }
        ]
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/pagina3',
                name: 'pagina3',
                component: () => import('../components/Pagina3.vue')
            }
        ]
    }
]

const router = new VueRouter({ routes, })
export default router;