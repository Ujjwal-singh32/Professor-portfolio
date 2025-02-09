import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminPanelAchive = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [newDoc, setNewDoc] = useState({
    name: "",
    description: "",
    date: "",
  });
  const [editDoc, setEditDoc] = useState(null);
  const { achieve, backendUrl } = useContext(UserContext);
  //console.log(achieve);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract the field name and value
    setNewDoc((prevState) => ({ ...prevState, [name]: value })); // Update the corresponding key
    console.log(newDoc);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", newDoc.name);
    formData.append("description", newDoc.description);
    formData.append("date", newDoc.date);

    try {
      if (editDoc) {
        const response = await axios.put(
          `${backendUrl}/api/achive/update-achives/${newDoc._id}`,
          {name : newDoc.name , description : newDoc.description ,date:newDoc.date }
        );

        if (response.data.success) {
          toast.success("achive Updated");
          navigate("/");
        }
      } else {
        // console.log("FormData values:");
        // for (let [key, value] of formData.entries()) {
        //   console.log(`${key}: ${value}`);
        // }
        const response = await axios.post(
          `${backendUrl}/api/achive/send-achive`,
          {name : newDoc.name , description : newDoc.description }
        );
        if (response.data.success) {
          toast.success("achive Added");
          navigate("/");
        } else {
          console.log("error");
        }
      }
    } catch (error) {
      console.error("Error saving research:", error);
      alert("Failed to save research.");
    }

    setNewDoc({
      name: "",
      description: "",
      date: "",
    });
    setEditDoc(null);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `${backendUrl}/api/achive/delete/${id}`
    );
    if (response.data.success) {
      toast.success("ACH Deleted");
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
              name="name"
              value={newDoc.name}
              onChange={handleChange}
              placeholder="name"
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

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              {editDoc ? "Update ach" : "Save ach"}
            </button>
          </div>
        )}
        {/* Edit Section - List Blogs */}
        {action === "edit" && !editDoc && (
          <div className="mt-4 space-y-4">
            {achieve.map((doc) => (
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
                  {doc.name}
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
            {achieve.map((doc) => (
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
                  {doc.name}
                </h2>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanelAchive;
