import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import Loading from '../Components/Loading';

const ArticleDetails = () => {
  const { user, loading, setLoading } = useAuth();
  const article = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  const [mongoUser, setMongoUser] = useState(null);
  const {
    _id,
    author_name,
    author_photo,
    author_email,
    date,
    category,
    content,
    tags,
    thumbnail,
    title,
    likedBy,
  } = article || {};

  const [liked, setLiked] = useState(likedBy?.includes(user?.email));
  const [likeCount, setLikeCount] = useState(likedBy?.length);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user?.email) {
      axios(`${import.meta.env.VITE_API_URL}/users?email=${user.email}`, {
        withCredentials: true,
      })
        .then((data) => {
          if (data?.data?.length > 0) setMongoUser(data.data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleLike = () => {
    if (!user?.email) {
      navigate('/login', { state: { from: location?.pathname } });
      return;
    }

    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, { email: user.email }, {
        withCredentials: true
      })
      .then((res) => {
        const isLiked = res?.data?.liked;
        setLiked(isLiked);
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((err) => console.log(err));
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!user?.email) {
      navigate('/login', { state: { from: location?.pathname } });
      return;
    }

    const comment = e.target.comment.value;
    const newComment = {
      comment,
      article_id: _id,
      user_id: mongoUser?._id,
      user_name: user?.displayName,
      user_photo: user?.photoURL,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/comments`, newComment, {
        withCredentials: true
      })
      .then((res) => {
        if (res?.data?.acknowledged) {
          setComments((prev) => [...prev, newComment]);
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (_id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/comments?article_id=${_id}`)
        .then((res) => {
          setComments(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [_id]);

  return (
    <div className="bg-base-200 min-h-screen">
      <section className="max-w-7xl xl:mx-auto mx-3 space-y-5 py-8">
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-base-100 p-6 md:px-12 border-2 border-neutral rounded-lg space-y-6">
            {/* Author info */}
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-10 h-10 object-cover" src={author_photo} alt={author_name} />
              <div>
                <h4 className="font-semibold text-accent opacity-90">{author_name}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-accent opacity-70 text-sm">Posted on {date}</span>
                  <span className="badge badge-outline badge-sm text-accent">{category}</span>
                </div>
              </div>
            </div>

            {/* Article content */}
            <div className="space-y-4">
              <h1 className="font-bold text-3xl md:text-4xl text-accent">{title}</h1>
              
              {/* Thumbnail image */}
              {thumbnail && (
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src={thumbnail} 
                    alt={title} 
                    loading="lazy"
                  />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-info-content text-sm">
                {tags?.map((tag, i) => (
                  <span key={i} className="badge badge-outline">#{tag}</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-lg text-accent opacity-90 leading-loose">{content}</p>
            </div>

            {/* Like and comment count */}
             <div className="flex items-center gap-8">
              <p className="flex items-center gap-2 sm:text-xl font-medium text-accent">
                <button
                  onClick={handleLike}
                  className="hover:scale-110 cursor-pointer duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={user?.email === author_email}
                >
                  {liked ? <FaHeart size={22} color="#F43F5E" /> : <FaRegHeart color="#F43F5E" size={23} />}
                </button>
                {likeCount}
              </p>
              <p className="flex items-center gap-2 sm:text-xl font-medium text-accent">
                <FaRegComment size={22} /> {comments?.length} comments
              </p>
            </div>

            {/* Comment section */}
            <div className="space-y-6">
              {/* Add comment form */}
              <div className="flex items-start gap-4">
                <img 
                  className="w-10 h-10 rounded-full object-cover" 
                  src={user?.photoURL || '/default-avatar.png'} 
                  alt={user?.displayName || 'User'} 
                />
                <form onSubmit={handleAddComment} className="relative w-full">
                  <input
                    name="comment"
                    type="text"
                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                    placeholder="Write a Comment..."
                  />
                  <input
                    className="absolute bg-secondary px-4 sm:px-6 p-2 rounded-tr-sm rounded-br-sm text-base-100 right-0 font-medium z-50 cursor-pointer"
                    type="submit"
                    value="Comment"
                  />
                </form>
              </div>

              {/* Comments list */}
              {comments.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-accent">Comments</h3>
                  {comments.map((comment, i) => (
                    <div className="flex gap-3" key={i}>
                      <img 
                        className="w-10 h-10 rounded-full object-cover" 
                        src={comment?.user_photo} 
                        alt={comment?.user_name} 
                      />
                      <div className="flex-1">
                        <div className="bg-base-200 p-3 rounded-lg">
                          <h4 className="font-medium text-accent">{comment?.user_name}</h4>
                          <p className="text-accent opacity-90 mt-1">{comment?.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ArticleDetails;