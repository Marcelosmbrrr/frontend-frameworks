<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <div class="flex">
                    <img class="mx-auto h-12 w-auto"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                </div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
                <input type="hidden" name="remember" value="true" />

                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-8">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" v-model="form.email"
                            class="relative block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-1 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
                            placeholder="Email address" />
                        <span className='text-red-500 text-sm'>{{ formError.email.message }}</span>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" v-model="form.password"
                            class="relative block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-1 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6"
                            placeholder="Password" />
                        <span className='text-red-500 text-sm'>{{ formError.password.message }}</span>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" v-model="rememberMe"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="group relative flex w-full justify-center rounded-md bg-emerald-600 py-2 px-3 text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        Sign in
                    </button>
                </div>
                <div v-if="alert.show">
                    <Alert :message="alert.message" />
                </div>
            </form>
        </div>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue';
import Alert from '../components/Alert.vue';
import FormValidation from '../providers/FormValidation';
import { useAuth } from '../store/index';

const form = reactive({ email: "", password: "" });
const formError = reactive({ email: { error: false, message: "" }, password: { error: false, message: "" } });
const alert = reactive({ show: false, message: "" });
const rememberMe = ref(false);
const store = useAuth();

function handleSubmit() {

    const obj = new FormValidation(form, formError);
    const { validation, is_valid } = obj.exec();

    Object.assign(formError, validation);

    if (!is_valid) {
        Object.assign(alert, { show: true, message: "Data is invalid!" });
        return;
    }

    Object.assign(alert, { show: false, message: "" });
    store.login(form);

}

</script>