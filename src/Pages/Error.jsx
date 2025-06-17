import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const Loading = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/error.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data));
    }, []);

    return (
        <div className='h-screen flex flex-col items-center gap-3 px-4'>
            <div className='w-full max-w-md h-1/2'>
                {animationData && (
                    <Lottie animationData={animationData} loop={true} />
                )}
            </div>
            <h2 className='text-secondary text-2xl sm:text-3xl font-bold text-center mt-6'>
                Oops..! The article you're searching for isn't on ShareWave right now!
            </h2>
            <Link to='/'>
                <a href="#_" class="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 mt-2">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">Back to Home</span>
                </a>
            </Link>

        </div>

    );
};

export default Loading;
