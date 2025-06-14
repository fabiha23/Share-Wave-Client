import React, { useContext, useEffect, useState } from 'react';
import { AuthDataContext } from '../contexts/AuthDataContext';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import Swal from 'sweetalert2';


const PostArticle = () => {
    const { user } = useContext(AuthDataContext);
    const [content, setContent] = useState('');
    const [mongoUser, setMongoUser] = useState(null)
    // console.log(user);

    useEffect(() => {
        if (user?.email) {
            axios(`${import.meta.env.VITE_API_URL}/users?email=${user?.email}`)
                .then(data => {
                    data?.data?.length > 0 && setMongoUser(data.data[0])
                    // setMongoUser(data.data);
                })
                .catch(err => console.log(err))
        }
    }, [user])

    const handlePostArticle = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newArticle = Object.fromEntries(formData.entries());

        const plainTextContent = new DOMParser().parseFromString(content, 'text/html').body.textContent || '';
        const tags = newArticle.tags.split(',').map(tag => tag.trim())

        newArticle.content = plainTextContent;
        newArticle.tags = tags
        newArticle.author_id = mongoUser?._id;
        newArticle.author_photo = user?.photoURL
        console.log(newArticle);

        //send to db
        axios.post(`${import.meta.env.VITE_API_URL}/articles`, newArticle)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Article Published',
                        icon: 'success',
                        timer:3000,
                        confirmButtonColor:'#10B981'
                    })
                    form.reset()
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3 my-10">
            <title>Post Article | ShareWave</title>
            <div className="bg-base-200 border-neutral border-2 md:pt-10 md:px-10 p-6 rounded-md space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-accent">Post New Article</h2>
                <p className="text-center text-accent font-medium lg:px-20 opacity-80">
                    Fill Out the Form Below to Publish a New Article
                </p>
                <form onSubmit={handlePostArticle} className="md:p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <fieldset className="fieldset bg-base-200 rounded-box col-span-2">
                            <label className="text-accent font-semibold text-base">Title</label>
                            <input
                                required
                                name="title"
                                type="text"
                                className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                placeholder="Article Title"
                            />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 rounded-box col-span-2">
                            <label className="text-accent font-semibold text-base">Thumbnail Image URL</label>
                            <input
                                required
                                name="thumbnail"
                                type="text"
                                className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                placeholder="https://example.com/image.jpg"
                            />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 rounded-box col-span-2">
                            <label className="text-accent font-semibold text-base">Content</label>
                            <JoditEditor
                                value={content}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) => setContent(newContent)}
                                config={{
                                    readonly: false,
                                    height: 290,
                                    placeholder: 'Write your article content here...',
                                }}
                            />
                        </fieldset>

                        {/* Grouped fields: Category, Tags, Author Email, Author Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
                            <fieldset className="fieldset bg-base-200 rounded-box">
                                <label className="text-accent font-semibold text-base">Category</label>
                                <select
                                    required
                                    name="category"
                                    className="select w-full focus:outline-0 focus:border-neutral focus:shadow-md text-accent"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Career & Skills">Career & Skills</option>
                                    <option value="Study Tips">Study Tips</option>
                                    <option value="Tech & Tools">Tech & Tools</option>
                                    <option value="Mental Health Wellness">Mental Health Wellness</option>
                                    <option value="Fitness & Nutrition">Fitness & Nutrition</option>
                                    <option value="Productivity">Productivity</option>
                                    <option value="Money Management">Money Management</option>
                                    <option value="Other">Other</option>
                                </select>
                            </fieldset>

                            <fieldset className="fieldset bg-base-200 rounded-box">
                                <label className="text-accent font-semibold text-base">Tags (comma-separated)</label>
                                <input
                                    name="tags"
                                    type="text"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                    placeholder="e.g. Career & Skills, react, javascript"
                                />
                            </fieldset>

                            <fieldset className="fieldset bg-base-200 rounded-box">
                                <label className="text-accent font-semibold text-base">Author Email</label>
                                <input
                                    value={user?.email || ''}
                                    readOnly
                                    name="author_email"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                />
                            </fieldset>

                            <fieldset className="fieldset bg-base-200 rounded-box">
                                <label className="text-accent font-semibold text-base">Author Name</label>
                                <input
                                    value={user?.displayName || ''}
                                    readOnly
                                    name="author_name"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                />
                            </fieldset>
                        </div>

                        <fieldset className="fieldset bg-base-200 rounded-box">
                            <label className="text-accent font-semibold text-base">Date</label>
                            <input
                                required
                                name="date"
                                type="date"
                                className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                            />
                        </fieldset>
                    </div>

                    <input
                        type="submit"
                        value="Post Article"
                        className="bg-primary text-base-100 w-full mt-6 py-2 rounded-md text-lg font-semibold shadow-md cursor-pointer hover:bg-info duration-300"
                    />
                </form>
            </div>
        </div>
    );
};

export default PostArticle;
