import React from 'react';
import { Link } from 'react-router';

const Article = ({ article }) => {
    return (
        <div
            className="bg-base-200 rounded-md shadow-md p-6 border-2 border-neutral hover:shadow-lg transition duration-200 flex flex-col h-full"
        >
            <h3 className="text-lg font-semibold text-accent mb-2 flex-grow">{article.title}</h3>
            <p className="text-sm font-medium text-accent opacity-80 mb-1">By {article.author_name}</p>
            <p className="text-sm text-accent opacity-70 mb-4">{article.date}</p>
            <Link to={`/articles/${article._id}`}>
                <button class="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-1 border-info rounded-md shadow-md group w-fit cursor-pointer">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-info group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-info transition-all duration-300 transform group-hover:translate-x-full ease text-sm">Read More</span>
                    <span class="relative invisible">Read More</span>
                </button>
            </Link>
        </div>

    );
};

export default Article;