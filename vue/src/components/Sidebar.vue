<template>
    <div class='w-full h-full shadow-md grid grid-rows-[repeat(5, 105px)_1fr]'>
        <router-link to="/dashboard" class="grid grid-rows-2 border border-slate-200 hover:text-emerald-400 cursor-pointer">
            <div class='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-gauge" class=' text-slate-600 cursor-pointer' />
            </div>
            <div class='justify-self-center self-start'>
                Dashboard
            </div>
        </router-link>
        <router-link to="/counter" class="grid grid-rows-2 border border-slate-200 hover:text-emerald-400 cursor-pointer">
            <div class='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-calculator" class=' text-slate-600 cursor-pointer' />
            </div>
            <div class='justify-self-center self-start'>
                Counter
            </div>
        </router-link>
        <router-link to="/todolist" class="grid grid-rows-2 border border-slate-200 hover:text-emerald-400 cursor-pointer">
            <div class='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-list" class=' text-slate-600 cursor-pointer' />
            </div>
            <div class='justify-self-center self-start'>
                Todo List
            </div>
        </router-link>
        <router-link to="/table" class="grid grid-rows-2 border border-slate-200 hover:text-emerald-400 cursor-pointer">
            <div class='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-table" class=' text-slate-600 cursor-pointer' />
            </div>
            <div class='justify-self-center self-start'>
                Table
            </div>
        </router-link>
        <router-link to="/profile" class="grid grid-rows-2 border border-slate-200 hover:text-emerald-400 cursor-pointer">
            <div class='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-user" class=' text-slate-600 cursor-pointer' />
            </div>
            <div class='justify-self-center self-start'>
                Profile
            </div>
        </router-link>
        <div class="flex flex-col justify-end">
            <div class='self-center px-2 py-4'>
                <img class="w-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Tailwind icon" />
            </div>
            <div class='self-center px-2 py-4'>
                <img class="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
</script>