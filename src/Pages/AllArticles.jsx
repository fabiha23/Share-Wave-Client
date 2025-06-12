import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth'
import Article from '../Components/Article';
import axios from 'axios';

const AllArticles = () => {
    const { loading, setLoading } = useAuth()
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
        // <div className="max-w-7xl mx-auto px-4 py-10">
        //     <h2 className="text-2xl font-bold mb-6 text-center text-primary">All Articles</h2>
        //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        //         {articles.map(article => (
        //             <div
        //                 key={article.id}
        //                 className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition duration-300"
        //             >
        //                 <h3 className="text-lg font-semibold text-accent mb-2">{article.title}</h3>
        //                 <p className="text-sm text-gray-600 mb-1">By {article.author}</p>
        //                 <p className="text-sm text-gray-400 mb-4">{article.date}</p>
        //                 <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition">
        //                     Read More
        //                 </button>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
            <div className="py-9">
                {loading ? (
                    <>loadingg</>
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
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Tech" />
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Lifestyle" />
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Home" />
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Travel" />
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Health and Nutrition" />
                        <input className="btn" type="radio" name="metaframeworks" aria-label="Fitness" />
                        <input className="btn text-accent checked:bg-info checked:text-white" type="radio" name="metaframeworks" aria-label="Other" />
                    </div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
                        {filteredArticles?.map(article => (<Article key={article._id} article={article}></Article>
                        ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default AllArticles;
