import React from 'react';
import Banner from '../Components/Banner';
import TopArticles from '../Components/TopArticles';
import UpdateModal from '../Components/UpdateModal';
import Categories from '../Components/Categories';
import Newsletter from '../Components/Newsletter';
import SharewaveStats from '../Components/SharewaveStats';

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
            <div className='bg-base-200 '>
                <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Categories></Categories>
                </div>
            </div>
            <div className='bg-base-200 '>
                <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <SharewaveStats></SharewaveStats>
                </div>
            </div>
            <div className='bg-base-200 border-t-2 border-neutral'>
                <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    );
};

export default Home;