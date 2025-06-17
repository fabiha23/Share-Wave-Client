import axios from 'axios';
import JoditEditor from 'jodit-react';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Swal from 'sweetalert2';

const UpdateModal = ({ selectedArticle }) => {
    // console.log(selectedArticle);
    const { _id, title, date, author_email, author_name, author_photo, content, tags, thumbnail, category } = selectedArticle || {}
    const [editorContent, setEditorContent] = useState(content || '');

    const handleUpRecipe = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedArticle = Object.fromEntries(formData.entries())
        console.log(updatedArticle);
        const tags = updatedArticle.tags.split(',').map(tag => tag.trim())
        updatedArticle.tags = tags



        axios.put(`${import.meta.env.VITE_API_URL}/articles/${_id}`, updatedArticle)
            .then(res => {
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        title: "Updated Your Article",
                        icon: "success",
                        draggable: true,
                        timer: 3000,
                        confirmButtonColor: "#10B981"
                    });
                    document.getElementById('my_modal_5').close();
                };
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-200 relative">
                    <form onSubmit={handleUpRecipe}>
                        <div className="grid grid-cols-2 gap-4">
                            <fieldset className="fieldset  rounded-box col-span-2">
                                <label className="text-accent font-semibold text-base">Title</label>
                                <input
                                    defaultValue={title}
                                    name="title"
                                    type="text"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                    placeholder="Article Title"
                                />
                            </fieldset>
                            <fieldset className="fieldset  rounded-box col-span-2">
                                <label className="text-accent font-semibold text-base">Thumbnail Image URL</label>
                                <input
                                    defaultValue={thumbnail}
                                    name="thumbnail"
                                    type="text"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </fieldset>
                            <fieldset className="fieldset  rounded-box col-span-2">
                                <label className="text-accent font-semibold text-base">Content</label>
                                <JoditEditor
                                    value={editorContent}
                                    onChange={(newContent) => setEditorContent(newContent)}
                                    tabIndex={1} // tabIndex of textarea
                                    // onBlur={(newContent) => setContent(newContent)}
                                    config={{
                                        readonly: false,
                                        height: 290,
                                        placeholder: 'Write your article content here...',
                                    }}
                                />
                            </fieldset>
                            {/* Grouped fields: Category, Tags, Author Email, Author Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
                                <fieldset className="fieldset  rounded-box">
                                    <label className="text-accent font-semibold text-base">Category</label>
                                    <select
                                        defaultValue={category}
                                        name="category"
                                        className="select w-full focus:outline-0 focus:border-neutral focus:shadow-md text-accent"
                                    >
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
                                <fieldset className="fieldset  rounded-box">
                                    <label className="text-accent font-semibold text-base">Tags (comma-separated)</label>
                                    <input
                                        defaultValue={tags}
                                        name="tags"
                                        type="text"
                                        className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                        placeholder="e.g. Career & Skills, react, javascript"
                                    />
                                </fieldset>
                                <fieldset className="fieldset  rounded-box">
                                    <label className="text-accent font-semibold text-base">Author Email</label>
                                    <input
                                        defaultValue={author_email}
                                        readOnly
                                        name="author_email"
                                        className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                    />
                                </fieldset>
                                <fieldset className="fieldset  rounded-box">
                                    <label className="text-accent font-semibold text-base">Author Name</label>
                                    <input
                                        defaultValue={author_name}
                                        readOnly
                                        name="author_name"
                                        className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                    />
                                </fieldset>
                            </div>
                            <fieldset className="fieldset  rounded-box">
                                <label className="text-accent font-semibold text-base">Date</label>
                                <input
                                    defaultValue={date}
                                    name="date"
                                    type="date"
                                    className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                                />
                            </fieldset>
                        </div>
                        <input type="submit" value="Update" className='hover:bg-info text-base-100 py-2 text-center mt-2 font-medium rounded-sm bg-primary duration-200 cursor-pointer w-full' />
                    </form>
                    <div className="modal-action absolute top-0 right-6">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-primary text-base-100 rounded-full cursor-pointer"><IoClose size={23} />
                            </button>
                        </form>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default UpdateModal;