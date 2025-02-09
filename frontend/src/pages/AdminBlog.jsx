import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminPanelBlog = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [newDoc, setNewDoc] = useState({
    title: "",
    blogImage: null,
    category: "",
    description: "",
    date: "",
  });
  const [editDoc, setEditDoc] = useState(null);
  const { blogs, backendUrl } = useContext(UserContext);
  const handleChange = (e) => {
    setNewDoc({ ...newDoc, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewDoc({ ...newDoc, blogImage: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newDoc.title);
    formData.append("category", newDoc.category);
    formData.append("description", newDoc.description);
    formData.append("date", newDoc.date);
    if (newDoc.blogImage) formData.append("blogImage", newDoc.blogImage);

    try {
      if (editDoc) {
        const response = await axios.put(
          `${backendUrl}/api/blogs/update-blog/${newDoc._id}`,
          formData
        );

        if (response.data.success) {
          toast.success("Blog Updated");
          navigate("/");
        }
      } else {
        const response = await axios.post(
          `${backendUrl}/api/blogs/send-blog`,
          formData
        );
        if (response.data.success) {
          toast.success("Blog Added");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog.");
    }

    setNewDoc({
      title: "",
      blogImage: null,
      category: "",
      description: "",
      date: "",
    });
    setEditDoc(null);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`${backendUrl}/api/blogs/delete/${id}`);
    if (response.data.success) {
      toast.success("Blog Deleted");
      navigate("/");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-6 bg-opacity-80 backdrop-blur"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-12 shadow-lg rounded-lg text-center w-full max-w-4xl text-white">
        <h1 className="text-7xl font-extrabold text-white mb-6">Blog Admin Panel</h1>

        {/* Buttons Section */}
        <div className="space-x-4 mb-6">
          <button
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => {
              setAction("add");
              setEditDoc(null);
            }}
          >
            Add
          </button>
          <button
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            onClick={() => setAction("edit")}
          >
            Edit
          </button>
          <button
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => setAction("delete")}
          >
            Delete
          </button>
        </div>

        {/* Add / Edit Blog Form */}
        {(action === "add" || editDoc) && action !== "delete" && (
          <div className="mt-4 p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              {editDoc ? "Edit Blog" : "Add a New Blog"}
            </h2>
            <input
              name="title"
              value={newDoc.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded mb-3"
              required
            />
            <input
              name="category"
              value={newDoc.category}
              onChange={handleChange}
              placeholder="Category (Max 15 chars)"
              className="w-full p-2 border border-gray-300 rounded mb-3 text-white"
              maxLength="15"
              required
            />
            <textarea
              name="description"
              value={newDoc.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded mb-3"
              required
            />
            <input
              name="date"
              type="date"
              value={newDoc.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-3"
              required
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded mb-3"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              {editDoc ? "Update Blog" : "Save Blog"}
            </button>
          </div>
        )}

        {/* Edit Section - List Blogs */}
        {action === "edit" && !editDoc && (
          <div className="mt-4 space-y-4">
            {blogs.map((doc) => (
              <div
                key={doc._id}
                className="relative p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <button
                  className="absolute top-2 right-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  onClick={() => {
                    setEditDoc(doc);
                    setNewDoc(doc);
                  }}
                >
                  Edit
                </button>
                <h2
                  className="text-xl font-semibold text-gray-700 "
                  onChange={handleChange}
                >
                  {doc.title}
                </h2>
                <p className="text-gray-600" onChange={handleChange}>
                  {doc.description}
                </p>
                {/* <p className="text-sm text-gray-500"  onChange={handleChange}>
                  Date: {new Date(doc.date).toLocaleDateString()}
                </p> */}
              </div>
            ))}
          </div>
        )}

        {/* Delete Section */}
        {action === "delete" && (
          <div className="mt-4 space-y-4">
            {blogs.map((doc) => (
              <div
                key={doc._id}
                className="relative p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <button
                  className="absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(doc._id)}
                >
                  Delete
                </button>
                <h2 className="text-xl font-semibold text-gray-700">
                  {doc.title}
                </h2>
                <p className="text-gray-600">{doc.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanelBlog;
