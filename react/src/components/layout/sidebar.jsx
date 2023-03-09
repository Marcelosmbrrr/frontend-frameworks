import * as React from 'react';
import { Link } from 'react-router-dom';
import { usePagination } from '../../context/Pagination';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {

    const navigate = useNavigate();
    const { page } = usePagination();

    function handleChangePage(route) {
        navigate(route, { replace: true });
    }

    return (
        <div className='w-full h-full shadow-md grid grid-rows-sidebar_items'>
            <div className={`grid grid-rows-2 border border-slate-200 ${page === "Dashboard" && "text-sky-400"} hover:text-sky-400 cursor-pointer`} onClick={() => handleChangePage("/internal")}>
                <div className='justify-self-center self-end'>
                    <ComputerOutlinedIcon />
                </div>
                <div className='justify-self-center self-start'>
                    Dashboard
                </div>
            </div>
            <div className={`grid grid-rows-2 border border-slate-200 ${page === "Counter" && "text-sky-400"} hover:text-sky-400 cursor-pointer`} onClick={() => handleChangePage("counter")}>
                <div className='justify-self-center self-end'>
                    <GroupOutlinedIcon />
                </div>
                <div className='justify-self-center self-start'>
                    Counter
                </div>
            </div>
            <div className={`grid grid-rows-2 border border-slate-200 ${page === "TodoList" && "text-sky-400"} hover:text-sky-400 cursor-pointer`} onClick={() => handleChangePage("todolist")}>
                <div className='justify-self-center self-end'>
                    <BadgeOutlinedIcon />
                </div>
                <div className='justify-self-center self-start'>
                    Todo List
                </div>
            </div>
            <div className={`grid grid-rows-2 border border-slate-200 ${page === "Memos" && "text-sky-400"} hover:text-sky-400 cursor-pointer`} onClick={() => handleChangePage("memoization")}>
                <div className='justify-self-center self-end'>
                    <BadgeOutlinedIcon />
                </div>
                <div className='justify-self-center self-start'>
                    Memo
                </div>
            </div>
            <div className={`grid grid-rows-2 border border-slate-200 ${page === "Profile" && "text-sky-400"} hover:text-sky-400 cursor-pointer`} onClick={() => handleChangePage("profile")}>
                <div className='justify-self-center self-end'>
                    <AccountCircleIcon />
                </div>
                <div className='justify-self-center self-start'>
                    Profile
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <div className='self-center px-2 py-4'>
                    <img
                        className="w-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Tailwind icon"
                    />
                </div>
                <div className='self-center px-2 py-4'>
                    <img
                        className="w-10"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="Laravel icon"
                    />
                </div>
            </div>
        </div>
    )
}