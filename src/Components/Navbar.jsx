import React, { use, useEffect, useState } from 'react';
import { IoMenu, IoMoonOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router'; 
import { FiSun } from 'react-icons/fi';
import wave from '../assets/wave.png';
import { AuthDataContext } from '../contexts/AuthDataContext';
import UserDropdown from './UserDropdown'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { user, signOutUser } = use(AuthDataContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Function to close mobile menu
  const closeMobileMenu = () => setOpen(false);

  // links now optionally receive a click handler (for mobile)
 const links = (handleClick) => (
  <>
    <li>
      <NavLink
        to="/"
        onClick={handleClick}
        className={({ isActive }) =>
          `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/all-articles"
        onClick={handleClick}
        className={({ isActive }) =>
          `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
        }
      >
        All Articles
      </NavLink>
    </li>

    {/* Conditionally render these links only if user is logged in */}
    {user && (
      <>
        <li>
          <NavLink
            to="/my-articles"
            onClick={handleClick}
            className={({ isActive }) =>
              `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
            }
          >
            My Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post-article"
            onClick={handleClick}
            className={({ isActive }) =>
              `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
            }
          >
            Post Article
          </NavLink>
        </li>
      </>
    )}

    <li>
      <NavLink
        to="/about-us"
        onClick={handleClick}
        className={({ isActive }) =>
          `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
        }
      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/faq"
        onClick={handleClick}
        className={({ isActive }) =>
          `hover:text-info duration-100 ${isActive ? 'border-l-3 text-info pl-1 border-info' : ''}`
        }
      >
        FAQ
      </NavLink>
    </li>
  </>
);



  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        return fetch(`${import.meta.env.VITE_API_URL}/logout`, {
          method: 'POST',
          credentials: 'include',
        });
      })
      .then((res) => {
        if (res.ok) {
          console.log('Signed out from Firebase and backend token cleared');
        } else {
          console.log('Backend logout failed');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav>
      <div className="flex justify-between py-4 items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl font-semibold flex gap-2 items-center bg-gradient-to-r from-secondary via-info-content to-info bg-clip-text text-transparent">
              <img className="w-6 h-5" src={wave} alt="" /> <span>ShareWave</span>
            </h1>
          </Link>
        </div>
        <div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-16 text-neutral text-sm font-medium">{links()}</ul>
        </div>
        <div className="flex gap-3 items-center">
          {!user && (
            <Link to="/login">
              <button className="text-neutral font-medium mr-1 text-sm hover:text-info cursor-pointer duration-100 border hover:border-info border-neutral px-3 py-1 will-change-transform rounded-sm">
                Login
              </button>
            </Link>
          )}

          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <FiSun className="swap-on w-6 h-6 text-neutral" />
            <IoMoonOutline className="text-neutral swap-off w-6 h-6" />
          </label>

          {/* User Avatar & Dropdown */}
          {user && (
            <div className="relative">
              <img
                onClick={() => setOpenUser(!openUser)}
                className="w-7 h-7 lg:w-8 lg:h-8 object-cover rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User"
              />
              {openUser && <UserDropdown user={user} onClose={() => setOpenUser(false)} onSignOut={handleSignOut} />}
            </div>
          )}

          {/* Mobile Menu Button */}
          <span className="text-neutral" onClick={() => setOpen(!open)}>
            {open ? <RxCross2 size={32} /> : <IoMenu size={32} className="lg:hidden" />}
          </span>
        </div>
      </div>

      <ul
        className={`px-8 space-y-7 text-lg font-semibold text-neutral md:w-1/2 h-screen lg:w-1/3 w-2/3 bg-primary top-0 py-10 backdrop-blur-xl lg:hidden absolute ${
          open ? 'left-0' : '-left-180 '
        } duration-1000`}
      >
        {links(closeMobileMenu)}
      </ul>
    </nav>
  );
};

export default Navbar;
