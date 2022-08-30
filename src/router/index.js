import { createRouter, createWebHistory } from "vue-router";

//componentes
import HomeView from "../views/HomeView.vue";
import DatosView from "../views/DatosView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/datos',
        name: 'Datos',
        component: DatosView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;