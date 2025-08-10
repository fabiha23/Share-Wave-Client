import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const ArticleMembership = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className='xl:py-14 py-10 bg-base-200'>
            <h2 className='text-3xl font-semibold text-center text-accent'>Writer Membership Plans</h2>
            <div className='flex justify-center items-center gap-3 mt-6'>
                <h2 className='text-accent/80 text-lg'>Billed Monthly</h2>
                <input
                    type="checkbox"
                    checked={isYearly}
                    onClick={()=>setIsYearly(!isYearly)}
                    className="toggle border-secondary border-2 text-secondary checked:border-secondary checked:text-secondary"
                />
                <h2 className='text-accent/80 text-lg'>Billed Yearly</h2>
                <h2 className='text-secondary bg-red-50 p-1 rounded-sm'>Save 20%</h2>
            </div>
            <div className='xl:mt-10 mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
                <div className="card bg-base-100 shadow-lg rounded-none h-fit border-t-4 border-info hover:scale-103 duration-300 ease-in-out transition-transform">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-accent text-center">Reader Plan</h2>
                        <h3 className="text-2xl text-accent text-center font-medium bg-info/10 py-2">
                            <span className='font-bold'>${isYearly?'72':'8'}</span>/{isYearly?'year':'month'}
                        </h3>
                        <h2 className="text-gray-500 text-center text-base">Perfect for casual readers</h2>
                        <ul className="mt-2 flex flex-col gap-3 text-sm text-accent">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 30 articles/month</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic article recommendations</span>
                            </li>
                            <li className='opacity-70'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Save up to 10 articles</span>
                            </li>
                            <li className="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>No ad-free experience</span>
                            </li>
                        </ul>
                        {/* <div className="mt-6">
                            <Link to='detailed-membership' className='bg-info text-white font-medium py-2 rounded-sm flex items-center justify-center gap-2 w-full mx-auto hover:scale-105 duration-300 ease-in-out hover:bg-info/90 will-change-transform'>
                                View Details <FaArrowRightLong />
                            </Link>
                        </div> */}
                    </div>
                </div>

                <div className="card bg-base-100 shadow-2xl rounded-none hover:scale-103 duration-300 ease-in-out transition-transform">
                    <span className="bg-info text-center py-2 text-white text-lg font-semibold">Most Popular</span>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-accent text-center">Writer Plan</h2>
                        <h3 className="text-2xl text-accent text-center font-medium bg-info/10 py-2">
                            <span className='font-bold'>${isYearly?'180':'19'}</span>/{isYearly?'year':'month'}
                        </h3>
                        <h2 className="text-gray-500 text-center text-base">For regular content creators</h2>
                        <ul className="mt-2 flex flex-col gap-3 text-sm text-accent">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Publish up to 20 articles/month</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority placement in feeds</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic analytics dashboard</span>
                            </li>
                            <li className='opacity-70'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Reader engagement metrics</span>
                            </li>
                        </ul>
                        {/* <div className="mt-6">
                            <Link to='detailed-membership' className='bg-info text-white font-medium py-2 rounded-sm flex items-center justify-center gap-2 w-full mx-auto hover:scale-105 duration-300 ease-in-out will-change-transform'>
                                View Details <FaArrowRightLong />
                            </Link>
                        </div> */}
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg rounded-none h-fit border-t-4 border-info hover:scale-103 duration-300 ease-in-out transition-transform">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-accent text-center">Premium Plan</h2>
                        <h3 className="text-2xl text-accent text-center font-medium bg-info/10 py-2">
                            <span className='font-bold'>${isYearly?'360':'39'}</span>/{isYearly?'year':'month'}
                        </h3>
                        <h2 className="text-gray-500 text-center text-base">For professional writers</h2>
                        <ul className="mt-2 flex flex-col gap-3 text-sm text-accent">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited article publishing</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Featured placement in discovery</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics dashboard</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Monetization opportunities</span>
                            </li>
                        </ul>
                        {/* <div className="mt-6">
                            <Link to='detailed-membership' className='bg-info text-white font-medium py-2 rounded-sm flex items-center justify-center gap-2 w-full mx-auto hover:scale-105 duration-300 ease-in-out hover:bg-secondary/90 will-change-transform'>
                                View Details <FaArrowRightLong />
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleMembership;