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
            <h2 className='text-accent text-3xl sm:text-4xl font-bold text-center'>
                Oops..!!
            </h2>
            <Link to='/'>
                <button className='bg-primary px-5 py-2 text-xl text-base-100 rounded-md hover:bg-[#588B44] cursor-pointer duration-300 font-semibold my-2'>
                    Go Back to Home
                </button>
            </Link>
        </div>

    );
};

export default Loading;
