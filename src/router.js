import { createRouter, createWebHistory } from "vue-router";


import PortFolio from "./pages/PortFolio.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        }
    ]
})

export { router };