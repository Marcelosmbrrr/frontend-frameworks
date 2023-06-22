import { createRouter, createWebHistory } from 'vue-router';
import { TokenValidation } from '../providers/TokenValidation';
import HomeLayout from '../layouts/HomeLayout.vue';
import BlankLayout from '../layouts/BlankLayout.vue';

// Vue Router
// https://router.vuejs.org/guide/
// This way to import components is lazy loading: https://router.vuejs.org/guide/advanced/lazy-loading.html
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active-route",
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'LOGIN',
            component: () => import("../views/Login.vue"),
            meta: {
                requireAuth: false,
                layout: BlankLayout
            }
        },
        {
            path: '/dashboard',
            name: 'DASHBOARD',
            component: () => import("../views/Dashboard.vue"),
            meta: {
                requireAuth: true,
                layout: HomeLayout
            }
        },
        {
            path: '/counter',
            name: 'COUNTER',
            component: () => import("../views/Counter.vue"),
            meta: {
                requireAuth: true,
                layout: HomeLayout
            }
        },
        {
            path: '/todolist',
            name: 'TODOLIST',
            component: () => import("../views/TodoList.vue"),
            meta: {
                requireAuth: true,
                layout: HomeLayout
            }
        },
        {
            path: '/table',
            name: 'TABLE',
            component: () => import("../views/Table.vue"),
            meta: {
                requireAuth: true,
                layout: HomeLayout
            }
        },
        {
            path: '/profile',
            name: 'PROFILE',
            component: () => import("../views/Profile.vue"),
            meta: {
                requireAuth: true,
                layout: HomeLayout
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import("../views/NotFound.vue"),
            layout: BlankLayout
        },
    ]
});

// Navigation Guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    if (to.meta.requireAuth) {
        const validation = new TokenValidation();

        if (!validation.exec()) {
            router.push("/login");
        } else {
            next();
        }

    }
    else next();

})

export default router;