import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidenav } from './Sidenav';

export function HomeLayout({ children }) {
    return (
        <section id="layout-container" className='w-screen h-screen flex flex-col'>
            <Header />
            <div className='grow w-full flex flex-row'>
                <Sidenav />
                <div className='grow h-full flex flex-col'>
                    <div id="page-content" className='grow w-full'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    )
} 