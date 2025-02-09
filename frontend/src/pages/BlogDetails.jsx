import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/blogs/get-blog/${id}`
        );
        console.log(response.data.blogs[0]);
        setBlog(response.data.blogs[0]);
      } catch (err) {
        setError("Failed to load blog details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, backendUrl]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!blog)
    return <p className="text-center text-gray-500">Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By--Dinesh Kumar | {new Date(blog.date).toLocaleDateString()}
      </p>
      {blog.blogImage ? (
        <img
          src={
            blog.blogImage?.trim()
              ? blog.blogImage
              : "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      ) : (
        <img
          src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Default Image"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 leading-relaxed overflow-y-auto break-words">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
