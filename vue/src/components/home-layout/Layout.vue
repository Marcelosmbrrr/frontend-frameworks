<template>
    <div class='flex flex-col h-screen'>
        <HeaderVue />
        <main class="grow grid" :class="{ [grid - cols - main]: store.open }">
            <SidebarVue />
            <div class="grid grid-rows-content gap-5 px-10 py-5">
                <div class='flex flex-col'>
                    <h1 class='text-gray-600 text-page_title'>{{ $route.name }}</h1>
                    <span>Subtitle</span>
                </div>
                <div class='self-start h-full w-full'>
                    <component :is="$router.meta.layout">
                        <RouterView />
                    </component>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import { useMenu } from '../../store/index';

const store = useMenu();

</script>