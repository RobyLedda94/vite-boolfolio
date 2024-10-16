import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import PortFolio from "./pages/PortFolio.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortFolio
        },
        {
            path: '/post/:slug', // rotta per il post
            name: 'post-detail',
            component: PostDetail
        }
    ]
})

export { router };