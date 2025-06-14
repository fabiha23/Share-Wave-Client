import React from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const ArticleDetails = () => {

    const [liked, setLiked] = useState(false)
    const { loading } = useAuth();
    const article = useLoaderData();
    const { author_name, author_photo, date, category, content, tags, thumbnail, title } = article;

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <div className='bg-base-200'>
            <section className='max-w-7xl xl:mx-auto mx-3 space-y-5 py-3'>
                {loading ? <Loading /> :
                    <div className='bg-base-100 p-8 px-16 border-2 border-neutral rounded-sm space-y-6'>
                        <div className='flex gap-2 items-center'>
                            <img className='rounded-full w-10 h-10' src={author_photo} alt="" />
                            <div>
                                <h4 className='font-semibold text-accent opacity-90 text-lg'>{author_name}</h4>
                                <h4 className='text-accent opacity-70 text-sm'>Posted on {date}</h4>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='font-bold text-4xl text-accent'>{title}</h1>
                            <div className='text-info-content space-x-3'>
                                {tags.map((tag, i) => <span key={i}>#{tag}</span>)}
                            </div>
                        </div>

                        <p className='text-lg text-accent opacity-90 leading-loose pb-6 border-neutral border-b-2'>{content}</p>
                        {/* Like and comment count */}
                        <div className='flex items-center gap-8'>
                            <p className='flex items-center gap-2 text-xl font-medium text-accent'>
                                <span onClick={handleLike} className='hover:scale-110 cursor-pointer duration-300'>
                                    {liked ? <FaHeart size={22} color='#F43F5E' /> :
                                        <FaRegHeart color='#F43F5E' size={23} />}
                                </span>
                                12</p>
                            <p className='flex items-center gap-2 text-xl font-medium text-accent'><FaRegComment size={21}/> 12</p>
                        </div>
                        {/* Comment section */}
                        <div>
                            <div className='flex items-center gap-4'>
                                <img className='w-9 rounded-full' src={author_photo} alt="" />
                                <form className='relative w-full'>
                                    <input
                                        name="tags"
                                        type="text"
                                        className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                        placeholder="Write a Comment..."
                                    />
                                    <input className='absolute bg-secondary px-6 p-2 rounded-tr-sm rounded-br-sm text-base-100 right-0 font-medium z-50 cursor-pointer' type="submit" value="Post" />
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    );
};

export default ArticleDetails;
