import React, { useContext, useState } from 'react';
import { AuthDataContext } from '../contexts/AuthDataContext';
import JoditEditor from 'jodit-react';

const PostArticle = () => {
  const { user } = useContext(AuthDataContext);
  const [content, setContent] = useState('');

  return (
    <div className="max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3 my-10">
      <title>Post Article | ShareWave</title>
      <div className="bg-base-200 border-neutral border-2 md:pt-10 md:px-10 p-6 rounded-md space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-accent">Post New Article</h2>
        <p className="text-center text-accent font-medium lg:px-20">
          Fill Out the Form Below to Publish a New Article
        </p>
        <form className="md:p-6">
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
                  <option value="Tech">Tech</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Other">Other</option>
                </select>
              </fieldset>

              <fieldset className="fieldset bg-base-200 rounded-box">
                <label className="text-accent font-semibold text-base">Tags (comma-separated)</label>
                <input
                  name="tags"
                  type="text"
                  className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                  placeholder="e.g. tech, react, javascript"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 rounded-box">
                <label className="text-accent font-semibold text-base">Author Email</label>
                <input
                  value={user?.email || ''}
                  readOnly
                  name="email"
                  className="input w-full focus:outline-0 focus:border-neutral focus:shadow-md"
                />
              </fieldset>

              <fieldset className="fieldset bg-base-200 rounded-box">
                <label className="text-accent font-semibold text-base">Author Name</label>
                <input
                  value={user?.displayName || ''}
                  readOnly
                  name="username"
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
            value="Publish Article"
            className="bg-primary text-base-100 w-full mt-6 py-2 rounded-md text-lg font-semibold shadow-md cursor-pointer hover:bg-info duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default PostArticle;
