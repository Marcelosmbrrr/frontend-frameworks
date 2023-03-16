<template>
    <header className='w-full basis-20 flex justify-center bg-white shadow-md'>
        <div className='grid grid-cols-header grid-rows-none w-header h-full gap-3 justify-items-center items-center'>
            <div>
                <font-awesome-icon icon="fa-solid fa-bars" className='hover:text-emerald-400 text-slate-600 cursor-pointer'
                    @click="handleMenuToggle" />
            </div>
            <div>
                <h1 className="pb-0 mb-0 text-gray-400 text-header_title"><span className='text-emerald-400'>Vue</span>App
                </h1>
            </div>
            <div className='flex justify-self-end'>
                <div className='pr-6'>
                    <font-awesome-icon icon="fa-solid fa-gear"
                        className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
                </div>
                <div className='pr-6'>
                    <NotificationsOutlinedIcon className='hover:text-emerald-400 text-slate-600 cursor-pointer' />
                </div>
                <div>
                    <MeetingRoomOutlinedIcon className='hover:text-emerald-400 text-slate-600 cursor-pointer'
                        @click="handleLogout" />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuth } from '../../store';

const store = useAuth();

function handleMenuToggle() {
    console.log('menu toggle');
}

function handleLogout() {
    store.logout();
}

</script>