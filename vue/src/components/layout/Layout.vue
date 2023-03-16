<template>
    <div className='flex flex-col h-screen'>
        <HeaderVue />
        <main className="grow grid grid-cols-main">
            <SidebarVue />
            <div className='grid grid-rows-content gap-5 px-10 py-5'>
                <div className='flex flex-col'>
                    <h1 className='text-gray-600 text-page_title'>{page}</h1>
                    <span>{subtitle[page]}</span>
                </div>
                <div className='self-start h-full w-full'>
                    INTERNAL PAGE
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

</script>