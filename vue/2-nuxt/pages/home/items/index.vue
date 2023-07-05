<template>
    <div class="flex py-2">
        <div>
            <button type="button" @click="refresh"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Refresh</button>
        </div>
        <div>
            <select v-model="limit"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-32 p-2.5">
                <option selected value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    </div>


    <div v-for="group in list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div v-for="item in group"
            class="p-2 border-2 grid grid-rows-5 border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64">
            <div class="row-span-1 text-center text-white">
                {{ item.username }}
            </div>
            <div class="row-span-4">
                <ul class="text-white">
                    <li>Firstname: {{ item.firstname }}</li>
                    <li>Email: {{ item.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import * as Vue from 'vue';

const limit = Vue.ref(10);

const { data: list, error, refresh } = await useFetch(`https://dummyjson.com/users?limit=${limit.value}&select=id,username,firstname,email,image`, {
    lazy: false,
    server: true,
    watch: [limit],
    transform: (data) => {

        let groups = [];
        const records = data.users;

        for (let i = 0; i < limit.value; i += 4) {
            const grupo = records.slice(i, i + 4);
            groups.push(grupo);
        }

        return groups;
    }
});

definePageMeta({
    layout: "home",
});
</script>