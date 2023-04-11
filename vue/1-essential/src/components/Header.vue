<template>
    <header class='w-full basis-20 flex justify-center bg-white shadow-md'>
        <div
            class='grid grid-cols-[min-content_min-content_1fr] grid-rows-none w-[95%] h-full gap-3 justify-items-center items-center'>
            <div>
                <font-awesome-icon icon="fa-solid fa-bars" class='hover:text-emerald-400 text-slate-600 cursor-pointer'
                    @click="handleMenuToggle" />
            </div>
            <div>
                <h1 class="pb-0 mb-0 text-gray-400 text-[25px]"><span class='text-emerald-400'>Vue</span>App
                </h1>
            </div>
            <div class='flex justify-self-end'>
                <div class='pr-6'>
                    <font-awesome-icon icon="fa-solid fa-gear"
                        class='hover:text-emerald-400 text-slate-600 cursor-pointer' />
                </div>
                <div class='pr-6'>
                    <font-awesome-icon icon="fa-solid fa-bell"
                        class='hover:text-emerald-400 text-slate-600 cursor-pointer' />
                </div>
                <div @click="handleLogout">
                    <font-awesome-icon icon="fa-solid fa-door-open"
                        class='hover:text-emerald-400 text-slate-600 cursor-pointer' />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuth } from '../store';
import { useMenu } from '../store';

const authStore = useAuth();
const menuStore = useMenu();

function handleMenuToggle() {
    menuStore.handleToggle();
}

function handleLogout() {
    authStore.logout();
}

</script>