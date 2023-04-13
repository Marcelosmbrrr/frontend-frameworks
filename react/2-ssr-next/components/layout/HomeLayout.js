import * as React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function HomeLayout({ children }) {

    const [openMenu, setOpenMenu] = React.useState(true);

    function handleMenuClick() {
        setOpenMenu((prev) => !prev);
    }

    return (
        <div className='flex flex-col h-screen w-screen overflow-hidden bg-stone-900'>
            <Header handleMenuClick={handleMenuClick} />
            <div className='w-full grow flex flex-row'>
                {openMenu && <Sidebar />}
                <div className='flex flex-col grow'>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}