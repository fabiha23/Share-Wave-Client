import React from 'react';
import idea from '../assets/idea1.jpg';
import knowledge from '../assets/knowledge1.jpg';
import networking from '../assets/networking.jpg';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Banner = () => {
    const button = <Link>
                            <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }} href="#_" className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-sm shadow-sm shadow-gray-600 group cursor-pointer">
                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-secondary rounded-full blur-md ease"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-secondary rounded-full blur-md"></span>
                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-info rounded-full blur-md"></span>
                                </span>
                                <span className="relative text-white">Explore Articles</span>
                            </motion.button>
                        </Link>
    return (
        <div className="carousel w-full">
            {/* Slide 1: Idea Sharing */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={knowledge} className="w-full object-cover h-[calc(100vh-61px)]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className='bg-transparent backdrop-blur-xs py-20 lg:w-[1200px] md:w-[800px] sm:w-[700px] space-y-3 w-[380px]'>
                        <h2 className="text-primary sm:text-4xl text-2xl lg:text-5xl font-bold">
                            Every Idea Matters. What's Yours?
                        </h2>
                        <p className="text-primary opacity-70 mt-3 md:text-xl font-semibold w-2/3 mx-auto">
                            Whether it's a small spark or a bold vision, share your ideas and let others be inspired by your thoughts.
                        </p>
                        {button}
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2: Reading / Learning */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={idea} className="w-full object-cover h-[calc(100vh-61px)] " />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

                    <div className='bg-transparent backdrop-blur-xs py-20 lg:w-[1200px] sm:w-[700px] space-y-3 w-[380px] md:w-[800px]'>
                        <h2 className="text-primary sm:text-4xl text-2xl lg:text-5xl font-bold">
                            A Place to Read, Reflect, and Rise
                        </h2>
                        <p className="text-primary opacity-70 mt-3 md:text-xl font-semibold w-2/3 mx-auto">
                            Discover ideas, perspectives, and insights from students around the world — all in one inspiring space.
                        </p>
                        {button}
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3: Networking / Community */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={networking} className="w-full object-cover h-[calc(100vh-61px)]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className='bg-transparent backdrop-blur-xs py-20 lg:w-[1200px] sm:w-[700px] space-y-3 w-[380px] md:w-[800px]'>
                        <h2 className="text-primary sm:text-4xl text-2xl lg:text-5xl font-bold">
                            Grow With a Community That Think Like You
                        </h2>
                        <p className="text-primary mt-3 md:text-xl font-semibold w-2/3 mx-auto opacity-70">
                            Connect with fellow learners, share experiences, and build friendships that empower your academic journey.
                        </p>
                        {button}
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
