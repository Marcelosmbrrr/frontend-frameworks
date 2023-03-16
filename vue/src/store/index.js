import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

// https://pinia.vuejs.org/core-concepts/
// Similar to the Vue Composition API's setup function, we can pass in a function that defines reactive properties and methods and returns an object with the properties and methods we want to expose.

// ==== AUTH STORE ==== //

export const useAuth = defineStore('auth', () => {

    const user = reactive({ name: "", email: "", role: "", created_at: "" });
    const is_authenticated = ref(false);

    async function handleVerify() {
        try {

            const token = localStorage.getItem("vue.token");

            if (!token) {
                throw new Error("Unauthenticated.");
            }

            Object.assign(user, JSON.parse(token));

        } catch (e) {
            console.log(e);
            router.push({ path: 'login' });
        }
    }

    async function login(form) {
        try {

            localStorage.setItem("vue.token", {
                name: "Guest",
                email: form.email
            });

            router.push({ path: 'dashboard' });

        } catch (e) {
            console.log(e);
            router.push({ path: 'login' });
        }
    }

    async function logout() {
        localStorage.removeItem("vue.token");
        router.push({ path: 'login' });
    }

    return { login, logout, handleVerify, user }
});

// ==== MENU STORE ==== //

export const useMenu = defineStore('menu', () => {

    const open = ref(false);

    function handleToggle() {
        open.value = !open.value;
    }

    return { handleToggle, open }
});