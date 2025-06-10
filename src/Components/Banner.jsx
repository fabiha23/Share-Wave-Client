import React from 'react';
import library from '../assets/library.jpg';
import network from '../assets/network.jpg';
import idea from '../assets/idea.jpg';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="carousel w-full">
            {/* Slide 1: Idea Sharing */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={idea} className="w-full object-cover h-[calc(100vh-61px)]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className='bg-transparent backdrop-blur-xs lg:py-40 lg:w-[1200px] py-20 md:w-[800px] space-y-3 w-[400px]'>
                       <h2 className="text-base-100 md:text-4xl text-2xl lg:text-5xl font-bold  drop-shadow-lg">
                            Every Idea Matters. What's Yours?
                        </h2>
                        <p className="text-base-100 mt-3 md:text-xl font-semibold w-2/3 mx-auto">
                            Whether it's a small spark or a bold vision, share your ideas and let others be inspired by your thoughts.
                        </p>
                        <Link>
                            <button className="bg-primary/60 text-neutral font-semibold text-lg md:text-xl px-6 py-3 rounded-lg border-2 border-neutral hover:bg-neutral hover:text-primary transition duration-200 cursor-pointer">
                                Explore Articles
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2: Reading / Learning */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={library} className="w-full object-cover h-[calc(100vh-61px)] " />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

                    <div className='bg-transparent backdrop-blur-xs lg:py-40 lg:w-[1200px] py-20 md:w-[800px] space-y-3 w-[400px]'>
                        <h2 className="text-neutral md:text-4xl text-2xl lg:text-5xl font-bold  drop-shadow-lg">
                            A Place to Read, Reflect, and Rise
                        </h2>
                        <p className="text-neutral mt-3 md:text-xl font-semibold w-2/3 mx-auto">
                            Discover ideas, perspectives, and insights from students around the world — all in one inspiring space.
                        </p>
                        <Link>
                            <button className="bg-primary/60 text-neutral font-semibold text-lg md:text-xl px-6 py-3 rounded-lg border-2 border-neutral hover:bg-neutral hover:text-primary transition duration-200 cursor-pointer">
                                Explore Articles
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3: Networking / Community */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={network} className="w-full object-cover h-[calc(100vh-61px)]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className='bg-transparent backdrop-blur-xs lg:py-40 lg:w-[1200px] py-20 md:w-[800px] space-y-3 w-[400px]'>
                        <h2 className="text-primary md:text-4xl text-2xl lg:text-5xl font-bold  drop-shadow-lg">
                            Grow With a Community That Think Like You
                        </h2>
                        <p className="text-primary mt-3 md:text-xl font-semibold w-2/3 mx-auto">
                            Connect with fellow learners, share experiences, and build friendships that empower your academic journey.
                        </p>
                        <Link>
                            <button className="bg-primary/60 text-neutral font-semibold text-lg md:text-xl px-6 py-3 rounded-lg border-2 border-neutral hover:bg-neutral hover:text-primary transition duration-200 cursor-pointer">
                                Explore Articles
                            </button>
                        </Link>
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
