import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useAuth } from '../../context/Auth';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useMenuOpen } from '../../context/MenuOpen';

export function Header() {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { setOpen } = useMenuOpen();
    const { logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
        } catch (e) {
            console.log(e);
        } finally {
            enqueueSnackbar("Your session was finished!", { variant: "success" });

            setTimeout(() => {
                navigate("/", { replace: true });
            }, 1000);
        }
    }

    function handleMenuToggle() {
        setOpen((prev) => !prev);
    }

    return (
        <header className='w-full basis-20 flex justify-center bg-white shadow-md'>
            <div className='grid grid-cols-header grid-rows-none w-header h-full gap-3 justify-items-center items-center'>
                <div>
                    <MenuIcon className='hover:text-sky-400 text-slate-600 cursor-pointer' onClick={handleMenuToggle} />
                </div>
                <div>
                    <h1 className="pb-0 mb-0 text-gray-400 text-header_title"><span className='text-sky-400'>React</span>App</h1>
                </div>
                <div className='flex justify-self-end'>
                    <div className='pr-6'>
                        <SettingsOutlinedIcon className='hover:text-sky-400 text-slate-600 cursor-pointer' />
                    </div>
                    <div className='pr-6'>
                        <NotificationsOutlinedIcon className='hover:text-sky-400 text-slate-600 cursor-pointer' />
                    </div>
                    <div>
                        <MeetingRoomOutlinedIcon className='hover:text-sky-400 text-slate-600 cursor-pointer' onClick={handleLogout} />
                    </div>
                </div>
            </div>
        </header>
    )
}