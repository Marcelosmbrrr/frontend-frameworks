<template>
    <component :is="$route.meta.layout">
        <div class='w-full h-full shadow rounded-md'>
            <div class="relative overflow-x-auto sm:rounded-lg">

                <div class="pb-4 bg-white dark:bg-gray-900 p-5">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <input type="text" id="table-search" v-model="paginate.search" v-on:keydown.enter="handleFetchData"
                            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items by ID">
                    </div>
                </div>

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Identifier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
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
                        <tr v-for="user in users" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ user.id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ user.firstName }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.username }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.password }}
                            </td>
                            <td class="px-6 py-4 flex">
                                <div class="mr-2">
                                    <EditUser :id="user.id" :name="user.firstName" :username="user.username" :password="user.password" />
                                </div>
                                <div>
                                    <DeleteUser :id="user.id" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <nav class="flex justify-end p-5" aria-label="Table navigation">
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

            </div>
        </div>
    </component>
</template>

<script setup>
import * as Vue from 'vue';
import EditUser from '../components/formulary/users/EditUser.vue';
import DeleteUser from '../components/formulary/users/DeleteUser.vue';
import axios from 'axios';

const initialUsers = [];
const initialPaginate = { limit: 10, page: 1, search: "" };

const users = Vue.ref([]);
const paginate = Vue.reactive({ limit: 10, page: 1, search: "" });

Vue.onMounted(async () => {
    Object.assign(paginate, initialPaginate);
    users.value = initialUsers;
    handleFetchData();
});

async function handleFetchData() {
    try {

        const offset = paginate.page * paginate.limit - paginate.limit;

        const response = axios.get(`https://dummyjson.com/users/${paginate.search}?limit=${paginate.limit}&skip=${offset}&select=id,firstName,username,password,image`);
        users.value = (await response).data.users;

    } catch (e) {
        console.log(e);
    }
}

function handleNextPage() {
    // If actual page is not the last page
    if (paginate.page < 100 / paginate.limit) { //  Math.round() if result is not an integer
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

</script>