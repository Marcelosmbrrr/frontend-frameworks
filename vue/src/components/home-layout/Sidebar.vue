<template>
    <div className='w-full h-full shadow-md grid grid-rows-sidebar_items'>
        <div class="grid grid-rows-2 border border-slate-200 hover:text-sky-400 cursor-pointer" @click="handleChangePage">
            <div className='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-bars"
                    className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
            </div>
            <div className='justify-self-center self-start'>
                Dashboard
            </div>
        </div>
        <div class="grid grid-rows-2 border border-slate-200 hover:text-sky-400 cursor-pointer" @click="handleChangePage">
            <div className='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-bars"
                    className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
            </div>
            <div className='justify-self-center self-start'>
                Counter
            </div>
        </div>
        <div class="grid grid-rows-2 border border-slate-200 hover:text-sky-400 cursor-pointer" @click="handleChangePage">
            <div className='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-bars"
                    className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
            </div>
            <div className='justify-self-center self-start'>
                Todo List
            </div>
        </div>
        <div class="grid grid-rows-2 border border-slate-200 hover:text-sky-400 cursor-pointer" @click="handleChangePage">
            <div className='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-bars"
                    className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
            </div>
            <div className='justify-self-center self-start'>
                Table
            </div>
        </div>
        <div class="grid grid-rows-2 border border-slate-200 hover:text-sky-400 cursor-pointer" @click="handleChangePage">
            <div className='justify-self-center self-end'>
                <font-awesome-icon icon="fa-solid fa-bars"
                    className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
            </div>
            <div className='justify-self-center self-start'>
                Profile
            </div>
        </div>
        <div className="flex flex-col justify-end">
            <div className='self-center px-2 py-4'>
                <img className="w-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Tailwind icon" />
            </div>
            <div className='self-center px-2 py-4'>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="Laravel icon" />
            </div>
        </div>
    </div>
</template>

<script setup>

function handleChangePage() {
    console.log('change page');
}

</script>