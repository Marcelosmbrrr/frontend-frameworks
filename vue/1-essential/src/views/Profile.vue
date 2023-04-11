<template>
    <component :is="$route.meta.layout">
        <div class='w-full h-full shadow rounded-md'>
            <div class='w-full h-full flex justify-center'>

                <form class='w-full'>
                    <div class="overflow-hidden shadow sm:rounded-md">
                        <div class="bg-white px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                        class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly v-bind:value="store.user.name" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                                        class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly v-bind:value="store.user.email" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address"
                                        class="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <input type="text" name="email-address" id="email-address" autoComplete="email"
                                        class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly v-bind:value="store.user.password" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address"
                                        class="block text-sm font-medium leading-6 text-gray-900">
                                        Last Access
                                    </label>
                                    <input type="text" name="email-address" id="email-address" autoComplete="email"
                                        class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly v-bind:value="store.user.last_access" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </component>
</template>

<script setup>
import * as Vue from 'vue';
import { useAuth } from '../store';

const store = useAuth();
</script>