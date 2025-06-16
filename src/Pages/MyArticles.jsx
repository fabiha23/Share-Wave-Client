import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Loading from '../Components/Loading';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { BiEditAlt } from 'react-icons/bi';

const MyArticles = () => {
    const { user, loading, setLoading } = useAuth()
    const [myArticle, setMyArticle] = useState(null)

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/articles?email=${user?.email}`)
            .then(response => {
                setMyArticle(response?.data || []);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3 py-10'>
            {loading ? <Loading></Loading> :
                <div>
                    <h2 className="text-4xl font-bold text-center text-accent mb-8">My Articles</h2>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            <thead>
                                <tr className='border-2 border-neutral'>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Published Date</th>
                                    <th>Likes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='font-medium text-accent opacity-90'>
                                {myArticle?.map((article, i) => (
                                    <tr className='border-2 border-neutral ' key={i}>
                                        <th>{i + 1}</th>
                                        <td>{article.title}</td>
                                        <td>{article.category}</td>
                                        <td>{article.date}</td>
                                        <td className='pl-8'>{article.likedBy?.length || 0}</td>
                                        <td className='flex gap-2 items-center '><span className='text-accent rounded-full p-1 duration-300 cursor-pointer hover:bg-slate-300 '><BiEditAlt size={22}/></span> <span className='text-red-600 rounded-full p-1 hover:bg-red-200 cursor-pointer duration-300'><MdOutlineDeleteOutline size={22}/></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>}
        </div>
    );
};

export default MyArticles;