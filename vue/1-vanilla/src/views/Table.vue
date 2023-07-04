<template>
    <component :is="$route.meta.layout">
        <div class='w-full h-full shadow rounded-md flex flex-col'>

            <div class="bg-white ">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <input type="text" id="table-search" v-model="paginate.search" v-on:keydown.enter="handleFetchData"
                        class="block text-sm text-gray-900 border w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items by ID">
                </div>
            </div>

            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Identifier
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        :key="user.id">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.id }}
                        </th>
                        <td class="px-6 py-3">
                            {{ user.firstName }}
                        </td>
                        <td class="px-6 py-3">
                            {{ user.username }}
                        </td>
                        <td class="px-6 py-3">
                            {{ user.email }}
                        </td>
                        <td class="px-6 py-3">
                            {{ user.password }}
                        </td>
                        <td class="px-6 py-3 flex items-center">
                            <!-- https://vuejs.org/guide/components/props.html#prop-passing-details  -->
                            <div class="mr-2">
                                <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                    @click="handleSelection({ op: 'update', user: user })">Edit</span>
                            </div>
                            <div>
                                <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                    @click="handleSelection({ op: 'delete', user: user })">Delete</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <nav class="flex justify-end p-2" aria-label="Table navigation">
                <ul class="inline-flex items-center -space-x-px">
                    <li @click="handlePrevPage">
                        <span href="#"
                            class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </li>
                    <li>
                        <span href="#"
                            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {{ paginate.page }}</span>
                    </li>
                    <li @click="handleNextPage">
                        <span href="#"
                            class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </li>
                </ul>
            </nav>

            <TransitionRoot as="template" :show="selected.op === 'update'">
                <EditUser :identifier="selected.user.id" :username="selected.user.username"
                    :firstName="selected.user.firstName" :email="selected.user.email" :password="selected.user.password"
                    @close="handleCloseModal" />
            </TransitionRoot>

            <TransitionRoot as="template" :show="selected.op === 'delete'">
                <DeleteUser @close="handleCloseModal" :identifier="selected.user.id" />
            </TransitionRoot>

        </div>
    </component>
</template>

<script setup>
import * as Vue from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import EditUser from '../components/formulary/users/EditUser.vue';
import DeleteUser from '../components/formulary/users/DeleteUser.vue';
import axios from 'axios';

const initialUsers = [];
const initialPaginate = JSON.stringify({ limit: 10, page: 1, search: "" });
const initialSelected = JSON.stringify({ op: 'none', user: {} });

const users = Vue.ref([]);
const paginate = Vue.reactive(JSON.parse(initialPaginate));
const selected = Vue.reactive(JSON.parse(initialSelected));

Vue.onMounted(async () => {
    Object.assign(paginate, JSON.parse(initialPaginate));
    users.value = initialUsers;
    handleFetchData();
});

async function handleFetchData() {
    try {

        const offset = paginate.page * paginate.limit - paginate.limit;

        const response = axios.get(`https://dummyjson.com/users/${paginate.search}?limit=${paginate.limit}&skip=${offset}&select=id,email,firstName,username,password,image`);
        users.value = (await response).data.users;

    } catch (e) {
        console.log(e);
    }
}

function handleNextPage() {
    // If actual page is not the last page - total is 10 pages (100 records / limit 10)
    // Refact: Math.round() if limit is not multiple of 100 - being limit always 10 isnt necessary
    if (paginate.page < (100 / paginate.limit)) {
        Object.assign(paginate, {
            ...paginate,
            ["page"]: paginate.page + 1
        });
    }
    handleFetchData();
}

function handlePrevPage() {
    // Is the actual page is not the first one
    if (paginate.page > 1) {
        Object.assign(paginate, {
            ...paginate,
            ["page"]: paginate.page - 1
        });
    }
    handleFetchData();
}

function handleSelection(selection) {
    Object.assign(selected, selection);
}

function handleCloseModal() {
    Object.assign(selected, JSON.parse(initialSelected));
}

</script>