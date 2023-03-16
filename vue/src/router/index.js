import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/home-layout/Layout.vue';

// Source: https://www.youtube.com/watch?v=juocv4AtrHo
// About lazy loading routes: https://router.vuejs.org/guide/advanced/lazy-loading.html

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'LOGIN',
            component: () => import("../views/Login.vue")
        },
        {
            path: '/dashboard',
            name: 'DASHBOARD',
            component: () => import("../components/home-layout/Layout.vue")
        },
        {
            path: '/counter',
            name: 'COUNTER',
            component: () => import("../views/Counter.vue"),
            meta: {
                layout: Layout
            }
        },
        {
            path: '/todolist',
            name: 'TODOLIST',
            component: () => import("../views/TodoList.vue"),
            meta: {
                layout: Layout
            }
        },
        {
            path: '/table',
            name: 'TABLE',
            component: () => import("../views/Table.vue"),
            meta: {
                layout: Layout
            }
        },
        {
            path: '/profile',
            name: 'PROFILE',
            component: () => import("../views/Profile.vue"),
            meta: {
                layout: Layout
            }
        }
    ]
});

export default router;