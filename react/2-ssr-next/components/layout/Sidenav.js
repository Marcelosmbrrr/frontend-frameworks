import * as React from 'react';
import Link from 'next/link';
// Mui
import { Tooltip } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Sidenav() {
    return (
        <aside className="w-20 h-full flex flex-col bg-gray-50 dark:bg-gray-900">
            <div className={`flex justify-center items-center h-14`}>
                <Tooltip title={"Users"} placement="right">
                    <Link href="/home" className={`p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white outline-none`}>
                        <GroupIcon className="block h-6 w-6 text-cyan-300" />
                    </Link>
                </Tooltip>
            </div>
            <div className={`flex justify-center items-center h-14`}>
                <Tooltip title={"Roles"} placement="right">
                    <Link href="/home/roles" className={`p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white outline-none`}>
                        <AssignmentIndIcon className="block h-6 w-6 text-cyan-300" />
                    </Link>
                </Tooltip>
            </div>
            <div className={`flex justify-center items-center h-14`}>
                <Tooltip title={"My Profile"} placement="right">
                    <Link href="/home/my-profile" className={`p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white outline-none`}>
                        <AccountCircleIcon className="block h-6 w-6 text-cyan-300" />
                    </Link>
                </Tooltip>
            </div>
        </aside>
    )
}