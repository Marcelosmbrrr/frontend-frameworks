<template>
    <Dialog as="div" class="relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
            leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            </div>
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white p-5">
                            <div class="flex flex-col">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                        <font-awesome-icon icon="fa-solid fa-pen"
                                            class="h-6 w-6 text-white bg-emerald-200 rounded-full p-1" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <DialogTitle as="h3"
                                            class="text-base font-semibold leading-6 text-gray-900 text-left">
                                            User Update - ID: {{ props.identifier }}</DialogTitle>
                                    </div>
                                </div>
                                <div>
                                    <div class="grid grid-rows-3 grid-cols-none gap-5 mt-5">
                                        <div>
                                            <label for="name"
                                                class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                            <div>
                                                <input type="text" name="name" id="name" :value="props.firstName"
                                                    autocomplete="given-name"
                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                        <div>
                                            <label for="username"
                                                class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                            <div>
                                                <input type="text" name="username" id="username" :value="props.username"
                                                    autocomplete="given-name"
                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email"
                                                class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                            <div>
                                                <input type="text" name="email" id="email" :value="props.email"
                                                    autocomplete="given-name"
                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:mt-0 sm:w-auto"
                                @click="handleClose">Update</button>
                            <button type="button"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto mr-2"
                                @click="$emit('close')" ref="cancelButtonRef">Cancel</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import * as Vue from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/vue';

const props = defineProps({
    identifier: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const emits = Vue.defineEmits(['close']);
</script>