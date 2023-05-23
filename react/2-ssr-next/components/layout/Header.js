import * as React from 'react';
import { useTheme } from '../../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
// Custom
import { useAuth } from '../../context/AuthContext';

export function Header() {

    const { signOut } = useAuth();
    const { ThemeButton } = useTheme();

    return (
        <header>
            <nav className="w-full bg-white border-b border-gray-200 dark:border-gray-700 px-6 py-2.5 dark:bg-gray-800">
                <div className="flex justify-between items-center">
                    <span className="flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mr-2 h-9" alt="NextJS logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="mr-2 h-9" alt="Firebase logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NextJS with Firebase</span>
                    </span>
                    <div className="flex items-center gap-1">
                        <ThemeButton />
                        <IconButton title='Logout' onClick={() => signOut()}>
                            <MeetingRoomIcon className="text-gray-800 dark:text-white" />
                        </IconButton>
                    </div>
                </div>
            </nav>
        </header>
    )
}