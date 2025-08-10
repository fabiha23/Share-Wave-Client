import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router';

const categories = [
    "Career & Skills",
    "Study Tips",
    "Tech & Tools",
    "Mental Health Wellness",
    "Fitness & Nutrition",
    "Productivity",
    "Money Management",
    "Other"
];

const Categories = () => {
    const { setLoading } = useAuth()
    const [category, setCategory] = useState(null)
    const navigate =useNavigate()

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/categories/${category}`)
            .then(res => {
                console.log(res.data);
                setCategory(res?.data?.category)
            })
            .catch(err => console.log(err));
    }, [category]);

    return (
        <div className="pt-18">
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">Explore by Categories</h2>

            <div className="grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-2">
                {categories.map((cat, i) => (
                        <button onClick={()=>{setCategory(cat)
                            navigate(`/categories/${cat}`)}}
                            key={i}
                            className=" py-2 rounded-full bg-info text-base-100 cursor-pointer duration-300 font-medium shadow-md hover:scale-103 sm:text-base text-sm text-nowrap opacity- will-change-transform"
                        >
                            {cat}
                        </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;
