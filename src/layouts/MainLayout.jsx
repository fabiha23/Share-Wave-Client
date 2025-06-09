import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header className='bg-primary sticky top-0 z-50'>
                <header className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Navbar></Navbar>
                </header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            {/* <footer className='bg-primary'>
                <footer className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Footer></Footer>
                </footer>
            </footer> */}
        </div>
    );
};

export default MainLayout;