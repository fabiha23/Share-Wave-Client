import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <section className=' min-h-[calc(100vh-80px)]'>
                <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Banner></Banner>
                </div>

            </section>
        </div>
    );
};

export default Home;