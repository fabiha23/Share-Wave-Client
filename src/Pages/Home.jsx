import React from 'react';
import Banner from '../Components/Banner';
import TopArticles from '../Components/TopArticles';

const Home = () => {
    return (
        <div>
            <section className=''>
                <Banner></Banner>
            </section>
            <div className='bg-base-200 min-h-[calc(100vh-64px)]'>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <TopArticles></TopArticles>
                    </div>
                </div>
        </div>
    );
};

export default Home;