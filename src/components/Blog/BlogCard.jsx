import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
const BlogCard = ({ index, post }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <Link
      to={`/blog/${post._id}`}
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <img
        src={post.cover}
        alt={post.title}
        className="w-full aspect-video object-cover"
      />
      <div className="flex flex-col p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 break-words">{post.title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center w-full sm:justify-between gap-1 sm:gap-2">
          <p className="text-xs sm:text-sm text-gray-600 break-words">by {post.author.username}</p>
          <p className="text-xs sm:text-sm text-gray-600">
            <time>{format(new Date(post.createdAt), "d MMM, yyyy HH:mm")}</time>
          </p>
        </div>
        <div className="text-sm sm:text-base text-indigo-500 font-medium mt-3 sm:mt-4 break-words">
          Inside: {post.summary}
        </div>
        {/* <p className="text-sm text-gray-600">
                    {post.content}
                </p> */}
      </div>
    </Link>
  );
};

export default BlogCard;
