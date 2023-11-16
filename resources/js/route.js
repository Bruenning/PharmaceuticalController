import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            usedName: 'Home'
        },
        component: () => import('./pages/Home.vue'),

    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./pages/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
