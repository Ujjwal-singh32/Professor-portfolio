import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminPanelProject = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [newDoc, setNewDoc] = useState({
    title: "",
    projectImage: null,
    category: "",
    description: "",
    date: "",
    members: [],
  });
  const [editDoc, setEditDoc] = useState(null);
  const { project, backendUrl } = useContext(UserContext);
 // console.log(project);
  const [member, setmember] = useState("");
  const handleChange = (e) => {
    setNewDoc({ ...newDoc, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewDoc({ ...newDoc, projectImage: e.target.files[0] });
  };
  const handleAddmember = () => {
    if (member.trim() !== "") {
      setNewDoc({ ...newDoc, members: [...newDoc.members, member] });
      setmember("");
    }
  };

  const handleRemovemember = (index) => {
    setNewDoc({
      ...newDoc,
      members: newDoc.members.filter((_, i) => i !== index),
    });
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newDoc.title);
    formData.append("category", newDoc.category);
    formData.append("description", newDoc.description);
    formData.append("date", newDoc.date);
    formData.append("members" , newDoc.members)
    if (newDoc.projectImage)
      formData.append("projectImage", newDoc.projectImage);

    try {
      if (editDoc) {
        const response = await axios.put(
          `${backendUrl}/api/projects/update-projects/${newDoc._id}`,
          formData
        );

        if (response.data.success) {
          toast.success("Project Updated");
          navigate("/");
        }
      } else {
        const response = await axios.post(
          `${backendUrl}/api/projects/send-project`,
          formData
        );
        if (response.data.success) {
          toast.success("project Added");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error saving projects:", error);
      alert("Failed to save projects.");
    }

    setNewDoc({
      title: "",
      projectImage: null,
      category: "",
      description: "",
      date: "",
      members: [],
    });
    setEditDoc(null);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `${backendUrl}/api/projects/delete/${id}`
    );
    if (response.data.success) {
      toast.success("project Deleted");
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
              name="category"
              value={newDoc.category}
              onChange={handleChange}
              placeholder="category"
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

            {/* members Section */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold">members</h3>
              <div className="flex items-center mb-3">
                <input
                  type="text"
                  value={member}
                  onChange={(e) => setmember(e.target.value)}
                  placeholder="member Name"
                  className="p-2 border border-gray-300 rounded mr-2"
                />
                <button
                  type="button"
                  onClick={handleAddmember}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Add member
                </button>
              </div>
              <ul>
                {newDoc.members.map((a, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 bg-gray-700 rounded mb-2"
                  >
                    {a}
                    <button
                      type="button"
                      onClick={() => handleRemovemember(index)}
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
            {project.map((doc) => (
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
            {project.map((doc) => (
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

export default AdminPanelProject;
