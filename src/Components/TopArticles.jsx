import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';
import { motion } from "motion/react"


const TopArticles = () => {
    const { loading, setLoading } = useAuth();
    const [topArticles, setTopArticles] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/topLikes`)
            .then(response => {
                setTopArticles(response?.data || []);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="py-10">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h2 className="text-3xl font-bold text-center text-accent mb-8">Featured Articles</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {topArticles.map((article) => (
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.7 }}  // 
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                key={article._id}
                                className="relative bg-base-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Popular badge */}
                                <span className="absolute top-3 right-3 bg-error text-base-100 text-xs px-2 py-1 rounded-full">
                                    popular
                                </span>

                                <h3 className="text-xl font-semibold text-accent my-2 mt-4 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-accent opacity-75 mb-4 line-clamp-3">
                                    {article.excerpt || article.content?.slice(0, 120) + '...'}
                                </p>
                                <div className="flex justify-between text-sm text-accent opacity-60">
                                    <span>By {article?.author_name}</span>
                                    <span>{new Date(article?.date).toLocaleDateString()}</span>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </>
            )}
        </div>
    );
};

export default TopArticles;
