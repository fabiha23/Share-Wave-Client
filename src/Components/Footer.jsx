import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import logo from '../assets/wave.png'


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
            <div className='border-2 border-secondary rounded-sm p-2'>
                <img className='w-6' src={logo} alt="" />
            </div>
            <nav className="grid grid-flow-col gap-4 text-neutral">
                <Link to='/about-us'>About Us</Link>
                <Link>Contact Us</Link>
                <Link>Terms & Conditions</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-neutral">
                    <a href="https://www.facebook.com/fabiha.amatullah.2024/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook size={20}></FaFacebook>
                    </a>
                    <a href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaTwitter size={20}></FaTwitter>
                    </a>
                    <a href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin size={20}></FaLinkedin>
                    </a>
                </div>
            </nav>
            <aside className='text-neutral'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;