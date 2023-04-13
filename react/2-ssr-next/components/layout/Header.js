import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';

export function Header(props) {

    function handleLogout() {
        console.log('logout')
    }

    function handleMenuClick() {
        props.handleMenuClick()
    }

    return (
        <div className='flex flex-row items-center justify-between bg-stone-900 basis-14 border border-gray-700'>

            <div className='grid grid-cols-[64px_auto]'>
                <div className='flex justify-center items-center rounded transition-all cursor-pointer'>
                    <div className='flex justify-center p-1 rounded hover:bg-stone-800' onClick={handleMenuClick}>
                        <MenuIcon style={{ color: '#7dd3fc' }} />
                    </div>
                </div>
                <div className='flex justify-center items-center pl-2'>
                    <img className="w-8 h-8 mr-2 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="logo" />
                    <h1 className='font-semibold text-2xl'><span className='text-sky-300'>NEXT</span><span className='text-white'>CRUD</span></h1>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 px-2'>
                <div className='p-1 flex justify-center rounded hover:bg-stone-800 transition-all cursor-pointer'>
                    <NightlightIcon style={{ color: '#7dd3fc' }} />
                </div>
                <div className='p-1 flex justify-center rounded hover:bg-stone-800 transition-all cursor-pointer'>
                    <NotificationsIcon style={{ color: '#7dd3fc' }} />
                </div>
                <div className='p-1 flex justify-center rounded hover:bg-stone-800 transition-all cursor-pointer' onClick={handleLogout}>
                    <ExitToAppIcon style={{ color: '#7dd3fc' }} />
                </div>
            </div>

        </div>
    )
}