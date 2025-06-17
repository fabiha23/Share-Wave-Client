import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth'
import Article from '../Components/Article';
import axios from 'axios';
import Loading from '../Components/Loading';

const AllArticles = () => {
    const [ loading, setLoading ] = useState(true)
    const [articles, setArticles] = useState(null)
    const [selected, setSelected] = useState('');
    const filteredArticles = (selected === 'All' || !selected)
        ? articles
        : articles.filter(arti => arti.category === selected);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/articles`)
            .then(res => {
                setArticles(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='bg-base-200'>
            <title>All Articles | ShareWave</title>
            <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                <div className="py-9">
                    {loading ? (
                        <Loading></Loading>
                    ) : (<>
                        <h2 className="text-4xl font-bold text-center text-accent">All Articles</h2>
                        <div
                            className="filter my-6 w-fit mx-auto"
                            onClick={(e) => {
                                if (e.target.type === 'radio') {
                                    setSelected(e.target.getAttribute('aria-label'));
                                }
                            }}
                        >
                            <input className="btn filter-reset" type="radio" name="metaframeworks" aria-label="All" />
                            <input className="btn bg-info  checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Career & Skills" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Study Tips" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Tech & Tools" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Mental Health Wellness" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Fitness & Nutrition" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Productivity" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Money Management" />
                            <input className="btn bg-info checked:bg-info text-base-200 mt-1" type="radio" name="metaframeworks" aria-label="Other" />
                        </div>
                        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
                            {filteredArticles?.map(article => (<Article key={article._id} article={article}></Article>
                            ))}
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllArticles;
