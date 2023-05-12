import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// Custom
import { Header } from './Header';
import { Sidenav } from './Sidenav';
import { useAuth } from '../../context/AuthContext';

export function HomeLayout({ children }) {

    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return (
            <section id="layout-container" className='bg-gray-50 dark:bg-gray-900 w-screen h-screen flex flex-col'>
                <Header />
                <div className='grow w-full flex flex-row'>
                    <Sidenav />
                    <div className='grow h-full flex flex-col'>
                        <div id="page-content" className='grow w-full'>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <Backdrop open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }


} 