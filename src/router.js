import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from './components/page/NotFound.vue'

const routes = [{
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/about",
        name: 'About',
        component: About
    },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;