import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            usedName: 'Home'
        },
        component: () => import('./Pages/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
