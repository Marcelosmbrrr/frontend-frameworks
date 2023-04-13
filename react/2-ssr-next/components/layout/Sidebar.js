import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export function Sidebar() {

    const router = useRouter();

    const items = [
        { id: 1, to: "dashboard", icon: <SpaceDashboardIcon style={{ color: '#7dd3fc' }} />, isActive: router.pathname === "/home/dashboard" },
        { id: 2, to: "users", icon: <GroupIcon style={{ color: '#7dd3fc' }} />, isActive: router.pathname === "/home/users" },
        { id: 3, to: "roles", icon: <BadgeIcon style={{ color: '#7dd3fc' }} />, isActive: router.pathname === "/home/roles" },
        { id: 4, to: "products", icon: <AllInboxIcon style={{ color: '#7dd3fc' }} />, isActive: router.pathname === "/home/products" },
        { id: 5, to: "myprofile", icon: <AccountBoxIcon style={{ color: '#7dd3fc' }} />, isActive: router.pathname === "/home/myprofile" }
    ]

    return (
        <div className='w-16 h-full bg-stone-900 border-r border-gray-700 flex flex-col p-1'>
            {items.map((item) =>
                <Link href={item.to} key={item.id} className={`w-full h-12 flex items-center justify-center rounded hover:bg-stone-800 transition-all ${item.isActive && "bg-stone-800"}`}>
                    {item.icon}
                </Link>
            )}
        </div>
    )
}