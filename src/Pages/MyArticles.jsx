import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Loading from '../Components/Loading';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { BiEditAlt } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { article } from 'motion/react-client';
import UpdateModal from '../Components/UpdateModal';

const MyArticles = () => {
    const { user, loading, setLoading } = useAuth()
    const [myArticle, setMyArticle] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/articles?email=${user?.email}`)
            .then(response => {
                setMyArticle(response?.data || []);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#E92D28",
            cancelButtonColor: "#10B981",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/articles/${_id}`)
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount) {
                            setMyArticle(prev => prev.filter(article => article._id !== _id));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#10B981",
                            });
                        }
                    })
            }

        });
    }

    useEffect(() => {
        if (selectedArticle) {
            const dialog = document.getElementById('my_modal_5')
            if (dialog) dialog.showModal()
        }
    }, [selectedArticle])

    return (
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3 py-10'>
            {loading ? <Loading></Loading> :
                <div>
                    <h2 className="text-3xl font-bold text-center text-accent mb-8">My Articles</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
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
                                        <td className="max-w-[200px] sm:max-w-[320px] whitespace-nowrap md:whitespace-normal truncate">{article.title}</td>
                                        <td>{article.category}</td>
                                        <td>{article.date}</td>
                                        <td className='pl-8'>{article.likedBy?.length || 0}</td>
                                        <td className='flex gap-2 items-center '>
                                            <span className='text-accent rounded-full p-1 duration-300 cursor-pointer hover:bg-slate-300 '><BiEditAlt onClick={() => {
                                                document.getElementById('my_modal_5').showModal()
                                                setSelectedArticle(article)
                                            }
                                            } size={22} /></span>
                                            <span onClick={() => handleDelete(article?._id)} className='text-red-600 rounded-full p-1 hover:bg-red-200 cursor-pointer duration-300'><MdOutlineDeleteOutline size={22} /></span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>}
            <UpdateModal key={selectedArticle?._id} selectedArticle={selectedArticle} />
        </div>
    );
};

export default MyArticles;