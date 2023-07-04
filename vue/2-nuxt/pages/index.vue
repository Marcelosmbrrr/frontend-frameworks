<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue logo">
                Nuxt
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input type="email" id="email" v-model="form.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <span class='text-red-500 text-sm'>{{ formError.email.message }}</span>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" v-model="form.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <span class='text-red-500 text-sm'>{{ formError.password.message }}</span>
                        </div>
                        <button type="submit" :disabled="loading"
                            class="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                            {{ loading ? 'Loading...' : 'Sign In' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import * as Vue from 'vue';
import useAuth from '../composables/useAuth';

const router = useRouter();
const { signIn } = useAuth();

const form = Vue.reactive({ email: "", password: "" });
const formError = Vue.reactive({ email: { error: false, message: "" }, password: { error: false, message: "" } });
const loading = useState('loading', () => false); // https://nuxt.com/docs/getting-started/state-management


function handleSubmit() {
    loading.value = true;
    if (!formValidation()) {
        return;
    }
    request();
}

function formValidation() {
    const email_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email) ? { error: false, message: "" } : { error: true, message: "Type a valid email" };
    const password_validation = form.password.length > 0 ? { error: false, message: "" } : { error: true, message: "Type your password" };

    formError.email = email_validation;
    formError.password = password_validation;

    return !(email_validation.error || password_validation.error);
}

function request() {
    try {
        signIn(form);
        router.push('/home/repositories')
    } catch (e) {
        console.log(e);
    } finally {
        loading.value = false;
    }
}

definePageMeta({
    layout: "guest",
});
</script>