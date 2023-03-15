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
            component: () => import("../pages/Login.vue")
        },
        {
            path: '/counter',
            name: 'COUNTER',
            component: () => import("../pages/Counter.vue")
        },
        {
            path: '/todolist',
            name: 'TODOLIST',
            component: () => import("../pages/TodoList.vue")
        },
        {
            path: '/table',
            name: 'TABLE',
            component: () => import("../pages/Table.vue")
        },
        {
            path: '/profile',
            name: 'PROFILE',
            component: () => import("../pages/Profile.vue")
        }
    ]
});

export default router;