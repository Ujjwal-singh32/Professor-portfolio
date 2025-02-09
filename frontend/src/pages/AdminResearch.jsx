import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminPanelResearch = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [newDoc, setNewDoc] = useState({
    title: "",
    ResearchImage: null,
    topic: "",
    description: "",
    date: "",
    authors: [],
  });
  const [editDoc, setEditDoc] = useState(null);
  const { research, backendUrl } = useContext(UserContext);
  console.log(research);
  const [author, setAuthor] = useState("");
  const handleChange = (e) => {
    setNewDoc({ ...newDoc, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewDoc({ ...newDoc, ResearchImage: e.target.files[0] });
  };
  const handleAddAuthor = () => {
    if (author.trim() !== "") {
      setNewDoc({ ...newDoc, authors: [...newDoc.authors, author] });
      setAuthor("");
    }
  };

  const handleRemoveAuthor = (index) => {
    setNewDoc({
      ...newDoc,
      authors: newDoc.authors.filter((_, i) => i !== index),
    });
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newDoc.title);
    formData.append("topic", newDoc.topic);
    formData.append("description", newDoc.description);
    formData.append("date", newDoc.date);
    formData.append("authors" , newDoc.authors)
    if (newDoc.ResearchImage)
      formData.append("ResearchImage", newDoc.ResearchImage);

    try {
      if (editDoc) {
        const response = await axios.put(
          `${backendUrl}/api/researchs/update-researchs/${newDoc._id}`,
          formData
        );

        if (response.data.success) {
          toast.success("Research Updated");
          navigate("/");
        }
      } else {
        const response = await axios.post(
          `${backendUrl}/api/researchs/send-research`,
          formData
        );
        if (response.data.success) {
          toast.success("Research Added");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error saving research:", error);
      alert("Failed to save research.");
    }

    setNewDoc({
      title: "",
      ResearchImage: null,
      topic: "",
      description: "",
      date: "",
      authors: [],
    });
    setEditDoc(null);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `${backendUrl}/api/researchs/delete/${id}`
    );
    if (response.data.success) {
      toast.success("Research Deleted");
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
        <h1 className="text-7xl font-extrabold text-white mb-6">Admin Panel</h1>

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
        {(action === "add" || editDoc) && (
          <div className="mt-4 p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              {editDoc ? "Edit Research" : "Add a New Research"}
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
              name="topic"
              value={newDoc.topic}
              onChange={handleChange}
              placeholder="topic"
              className="w-full p-2 border border-gray-300 rounded mb-3"
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

            {/* Authors Section */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold">Authors</h3>
              <div className="flex items-center mb-3">
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author Name"
                  className="p-2 border border-gray-300 rounded mr-2"
                />
                <button
                  type="button"
                  onClick={handleAddAuthor}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Add Author
                </button>
              </div>
              <ul>
                {newDoc.authors.map((a, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 bg-gray-700 rounded mb-2"
                  >
                    {a}
                    <button
                      type="button"
                      onClick={() => handleRemoveAuthor(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              {editDoc ? "Update Research" : "Save Research"}
            </button>
          </div>
        )}
        {/* Edit Section - List Blogs */}
        {action === "edit" && !editDoc && (
          <div className="mt-4 space-y-4">
            {research.map((doc) => (
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
                  {doc.topic}
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
            {research.map((doc) => (
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
                <p className="text-gray-600">{doc.topic}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanelResearch;
