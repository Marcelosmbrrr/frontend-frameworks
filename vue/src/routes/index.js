import { createRouter, createWebHistory } from 'vue-router';

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
            path: '/counter',
            name: 'COUNTER',
            component: () => import("../views/Counter.vue")
        },
        {
            path: '/todolist',
            name: 'TODOLIST',
            component: () => import("../views/TodoList.vue")
        },
        {
            path: '/table',
            name: 'TABLE',
            component: () => import("../views/Table.vue")
        },
        {
            path: '/profile',
            name: 'PROFILE',
            component: () => import("../views/Profile.vue")
        }
    ]
});

export default router;