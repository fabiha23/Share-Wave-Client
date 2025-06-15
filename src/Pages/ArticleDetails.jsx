import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const ArticleDetails = () => {

    const { user, loading, setLoading } = useAuth();
    const article = useLoaderData();
    const [mongoUser, setMongoUser] = useState(null)
    const { _id, author_name, author_photo, author_email, date, category, content, tags, thumbnail, title, likedBy } = article || {};
    const [liked, setLiked] = useState(likedBy.includes(user?.email))
    const [likeCount, setLikeCount] = useState(likedBy.length)
    const [comments, setComments] = useState([])

    useEffect(() => {
        if (user?.email) {
            axios(`${import.meta.env.VITE_API_URL}/users?email=${user?.email}`)
                .then(data => {
                    data?.data?.length > 0 && setMongoUser(data.data[0])
                })
                .catch(err => console.log(err))
        }
    }, [user])


    const handleLike = () => {
        axios.patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, { email: user?.email })
            .then(res => {
                const isLiked = res?.data?.liked
                console.log(res.data);
                setLiked(res?.data.liked)
                setLikeCount(prev => isLiked ? prev + 1 : prev - 1)
            })
            .catch(err => console.log(err))
    }

    const handleAddComment = e => {
        e.preventDefault()

        const comment = e.target.comment.value;
        const newComment = {
            comment,
            article_id: _id,
            user_id: mongoUser?._id,
            user_name: user?.displayName,
            user_photo: user?.photoURL,
        }
        // console.log(newComment);
        //send to db
        axios.post(`${import.meta.env.VITE_API_URL}/comments`, newComment)
            .then(res => {
                console.log('in post', res.data);
                if (res.data.acknowledged) {
                    setComments(prev => [...prev, newComment])
                    e.target.reset()

                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (_id) {
            axios.get(`${import.meta.env.VITE_API_URL}/comments?article_id=${_id}`)
                .then(res => {
                    setComments(res.data);
                    setLoading(false);
                    console.log('in get', res.data);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [_id]);


    return (
        <div className='bg-base-200'>
            <section className='max-w-7xl xl:mx-auto mx-3 space-y-5 py-3'>
                {loading ? <Loading /> :
                    <div className='bg-base-100 p-8 md:px-16 border-2 border-neutral rounded-sm space-y-6'>
                        <div className='flex gap-2 items-center'>
                            <img className='rounded-full sm:w-10 sm:h-10 w-9 h-9' src={author_photo} alt="" />
                            <div>
                                <h4 className='font-semibold text-accent opacity-90 sm:text-lg'>{author_name}</h4>
                                <h4 className='text-accent opacity-70 text-sm'>Posted on {date}</h4>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <h1 className='font-bold text-3xl md:text-4xl text-accent'>{title}</h1>
                            <div className='text-info-content sm:space-x-4 space-x-3 text-sm'>
                                {tags.map((tag, i) => <span key={i}>#{tag}</span>)}
                            </div>
                            {/* <img className='w-full h-90 object-cover' src={thumbnail} alt="" /> */}

                        </div>

                        <p className='text-lg text-accent opacity-90 leading-loose pb-6 border-neutral border-b-2'>{content}</p>
                        {/* Like and comment count */}
                        <div className='flex items-center gap-8'>
                            <p className='flex items-center gap-2 sm:text-xl font-medium text-accent'>
                                <button onClick={handleLike} className='hover:scale-110 cursor-pointer duration-300 disabled:opacity-50 disabled:cursor-not-allowed' disabled={user?.email === author_email}
                                >
                                    {liked ? <FaHeart size={22} color='#F43F5E' /> :
                                        <FaRegHeart color='#F43F5E' size={23} />}
                                </button>
                                {likeCount}</p>
                            <p className='flex items-center gap-2 sm:text-xl font-medium text-accent'><FaRegComment size={22} /> {comments.length} comments</p>
                        </div>
                        {/* Comment section */}
                        <div>
                            <div className='flex items-center gap-4'>
                                <img className='w-9 rounded-full' src={user?.photoURL} alt="" />
                                <form onSubmit={handleAddComment} className='relative w-full'>
                                    <input
                                        name="comment"
                                        type="text"
                                        className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                        placeholder="Write a Comment..."
                                    />
                                    <input className='absolute bg-secondary px-4 sm:px-6 p-2 rounded-tr-sm rounded-br-sm text-base-100 right-0 font-medium z-50 cursor-pointer' type="submit" value="Comment" />
                                </form>
                            </div>
                            {comments && <div className='flex items-center gap-4'>
                                <div className='w-full'>
                                    {comments.map((comment,i) => <div className='flex items-center gap-2 mt-4 ' key={i}>
                                        <img className='w-9 rounded-full' src={comment.user_photo} alt="" />
                                        <h3 className='border-neutral border-1 p-2 px-4 rounded-sm w-full text-accent opacity-85 font-medium'>{comment.comment}</h3>
                                    </div>
                                    )}
                                </div>
                            </div>}
                        </div>
                    </div>}
            </section>
        </div>
    );
};

export default ArticleDetails;
