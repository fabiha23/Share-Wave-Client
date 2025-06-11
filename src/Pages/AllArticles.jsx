import React from 'react';

const articles = [
    {
        id: 1,
        title: "Mastering React in 30 Days",
        author: "Jane Doe",
        date: "June 10, 2025",
    },
    {
        id: 2,
        title: "The Power of Tailwind CSS",
        author: "John Smith",
        date: "June 8, 2025",
    },
    {
        id: 3,
        title: "Building Scalable Web Apps",
        author: "Sana Ali",
        date: "June 5, 2025",
    },
    {
        id: 4,
        title: "Frontend Performance Tips",
        author: "Raymond Chen",
        date: "June 2, 2025",
    },
    {
        id: 5,
        title: "JavaScript Deep Dive",
        author: "Lina Khan",
        date: "May 30, 2025",
    },
    {
        id: 6,
        title: "Understanding UX & UI",
        author: "Alex Kim",
        date: "May 28, 2025",
    },
];

const AllArticles = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">All Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map(article => (
                    <div
                        key={article.id}
                        className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-lg font-semibold text-accent mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">By {article.author}</p>
                        <p className="text-sm text-gray-400 mb-4">{article.date}</p>
                        <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArticles;
