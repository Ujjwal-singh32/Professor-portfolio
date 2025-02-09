import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

const BlogPosts = () => {
  const navigate = useNavigate();
  const { blogs } = useContext(UserContext); // Ensure blogs is always an array

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-500">No blog posts available.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">
        Blog Posts
      </h1>
      <p className="text-lg text-center text-black-100 mt-2">
        Insights, research, and discussions from various fields.
      </p>

      <div className="mt-8 flex flex-col space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-700 mt-2">
                {blog.category.length > 15
                  ? blog.category.slice(0, 15) + "..."
                  : blog.category}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Date:{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <p
              className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              onClick={() => navigate(`/blog/${blog._id}`)}
            >
              Read More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
