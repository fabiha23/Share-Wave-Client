import React, { use, useEffect, useState } from 'react';
import { IoMenu, IoMoonOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router';
import { TbLogout2 } from 'react-icons/tb';
import { FiSun } from 'react-icons/fi';
import wave from '../assets/wave.png'
import { AuthDataContext } from '../contexts/AuthDataContext';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const { user, signOutUser } = use(AuthDataContext)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    //     if (loading) {
    //     return <div className='text-center py-5'>Loading...</div>; // or your spinner
    // }

    const links = <>
        <li>
            <NavLink className={({ isActive }) =>
                `hover:text-info duration-100 ${isActive && 'border-l-3 text-info pl-1 border-info'}`
            } to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                `hover:text-info duration-100 ${isActive && 'border-l-3 text-info pl-1 border-info'}`
            } to='/all-articles'>All Articles</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                ` hover:text-info duration-100 ${isActive && 'border-l-3 text-info pl-1 border-info'}`
            } to='/my-articles'>My Articles</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                ` hover:text-info duration-100 ${isActive && 'border-l-3 text-info pl-1 border-info'}`
            } to='/post-article'>Post Article</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                ` hover:text-info duration-100 ${isActive && 'border-l-3 text-info pl-1 border-info'}`
            } to='/about-us'>About Us</NavLink>
        </li>
        {/* {user ? (<></>) : (
            <>
                <li>
                    <NavLink className={({ isActive }) =>
                        `mr-3 ${isActive ? 'text-primary' : 'text-accent hover:text-primary'}`
                    } to='/login'>Login</NavLink>
                </li>
            </>)
        } */}
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('sign out hoise')
                return fetch(`${import.meta.env.VITE_API_URL}/logout`, {
                    method: 'POST',
                    credentials: 'include',
                });
            })
            .then(res => {
                if (res.ok) {
                    console.log('Signed out from Firebase and backend token cleared');
                    // Clear any frontend state here, e.g. setUser(null)
                } else {
                    console.log('Backend logout failed');
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <nav>
            <div className='flex justify-between py-4 items-center'>
                <div>
                    <Link to='/'>
                        <h1 className="text-xl font-semibold flex gap-2 items-center bg-gradient-to-r from-secondary via-info-content to-info bg-clip-text text-transparent">
                            <img className='w-6 h-5' src={wave} alt="" /> <span>ShareWave</span></h1>
                    </Link>
                </div>
                <div>
                    <ul className='hidden xl:flex gap-16 text-neutral text-sm font-medium'>
                        {links}
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>
                        {
                            user ? <></> : <Link to='/login'>
                                <button className='text-neutral font-medium mr-1 text-sm hover:text-info cursor-pointer duration-100 border hover:border-info border-neutral px-3 py-1 will-change-transform rounded-sm'>Login</button>
                            </Link>
                        }
                    </div>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />

                        {/* Sun icon (light mode) */}
                        <FiSun className="swap-on w-6 h-6 text-neutral" />

                        {/* Moon icon (dark mode) */}
                        <IoMoonOutline className="text-neutral swap-off w-6 h-6" />
                    </label>
                    {user &&
                        <div className='relative'>
                            <img onClick={() => setOpenUser(!openUser)} className='w-7 h-7 lg:w-8 lg:h-8 object-cover rounded-full cursor-pointer' src={user.photoURL} alt="User" />
                            {openUser && (
                                <div className="absolute right-0 mt-2 bg-base-200 p-3 shadow rounded z-50 text-accent top-9 border-2 border-neutral w-50 space-y-2">
                                    <p className='font-medium'>{user.displayName}</p>
                                    <Link to='/my-articles'>
                                        <p>My Articles</p>
                                    </Link>
                                    <Link to='/post-article'>
                                        <p className='my-2'>Post Article</p>
                                    </Link>
                                    <button className='flex items-center gap-2 bg-base-00 border-2 border-neutral p-1 px-3 shadow-sm rounded-sm cursor-pointer font-medium text-accent' onClick={handleSignOut}><TbLogout2 />
                                        Logout</button>
                                </div>
                            )}
                        </div>
                    }
                    <span className='text-neutral' onClick={() => setOpen(!open)}>{
                        open ? <RxCross2 size={32} /> : <IoMenu size={32} className='xl:hidden' />
                    }
                    </span>
                </div>
            </div>
            <ul className={`px-8 space-y-7 text-lg font-semibold text-neutral md:w-1/2 h-screen lg:w-1/3 w-2/3 bg-primary top-0 py-10 backdrop-blur-xl xl:hidden absolute ${open ? 'left-0' : '-left-180 '} duration-1000`}>
                {links}
            </ul>
        </nav>
    );
};

export default Navbar;