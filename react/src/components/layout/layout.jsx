import * as React from 'react';
import { useAuth } from '../../context/Auth';
import { usePagination } from '../../context/Pagination';
import { useMenuOpen } from '../../context/MenuOpen';
import { Outlet } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function Layout() {

    const { isAuthenticated, user } = useAuth();
    const { open } = useMenuOpen();
    const { page } = usePagination();

    const subtitle = {
        Dashboard: "/",
        Counter: "Dashboard / Counter",
        TodoList: "Dashboard / TodoList",
        Memos: "Memos / Memos",
        Profile: "Dashboard / Profile",
    }

    if (isAuthenticated) {
        return (
            <div className='flex flex-col h-screen'>
                <Header />
                <main className={`grow grid ${open && "grid-cols-main"}`}>
                    {open && <Sidebar />}
                    <div className='grid grid-rows-content gap-5 px-10 py-5'>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-600 text-page_title'>{page}</h1>
                            <span>{subtitle[page]}</span>
                        </div>
                        <div className='self-start h-full w-full'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        )
    } else {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
}