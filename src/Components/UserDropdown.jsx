import React from 'react';
import { Link } from 'react-router';
import { TbArticle, TbEdit, TbLogout2 } from 'react-icons/tb';

const UserDropdown = ({ user, onClose, onSignOut }) => {
  return (
    <div
      className="absolute right-0 mt-3 top-9 bg-base-200 rounded-md shadow-xl z-50 border border-neutral overflow-hidden"
    >
      <div className="p-4 border-b border-neutral">
        <p className="font-semibold text-accent truncate">{user.displayName}</p>
        <p className="text-sm text-accent/60">{user.email}</p>
      </div>

      <div className="py-1">
        <Link
          to="/my-articles"
          className="flex items-center px-4 py-2 text-accent hover:bg-base-200 transition-colors"
          onClick={onClose}
        >
          <TbArticle className="mr-3" />
          My Articles
        </Link>

        <Link
          to="/post-article"
          className="flex items-center px-4 py-2 text-accent hover:bg-base-200 transition-colors"
          onClick={onClose}
        >
          <TbEdit className="mr-3" />
          Post Article
        </Link>
      </div>

      <div className="py-1 border-t border-neutral">
        <button
          onClick={() => {
            onClose();
            onSignOut();
          }}
          className="w-full flex items-center px-4 py-2 text-accent hover:bg-error transition-colors cursor-pointer"
        >
          <TbLogout2 className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
