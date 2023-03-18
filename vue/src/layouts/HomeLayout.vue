<template>
    <div class='flex flex-col h-screen'>
        <HeaderVue />
        <main class="grow grid grid-cols-[130px_1fr]">
            <SidebarVue />
            <div class="grid grid-rows-[75px_1fr] gap-5 px-10 py-5">
                <div class='flex flex-col'>
                    <h1 class='text-gray-600 text-[28px]'>{{ $route.name }}</h1>
                    <span>Subtitle</span>
                </div>
                <div class='self-start h-full w-full'>
                    <div class='w-full h-full shadow rounded-md'>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import HeaderVue from '../components/Header.vue';
import SidebarVue from '../components/Sidebar.vue';
import { useMenu } from '../store';

const store = useMenu();

</script>