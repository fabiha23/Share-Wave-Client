import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary sticky top-0 z-50">
        <header className="max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3">
          <Navbar />
        </header>
      </header>

      <main className="flex-grow"> 
        <Outlet />
      </main>

      <footer className="bg-primary">
        <footer className="max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3">
          <Footer />
        </footer>
      </footer>
    </div>
  );
};


export default MainLayout;