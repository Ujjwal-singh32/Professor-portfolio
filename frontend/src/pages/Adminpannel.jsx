import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AdminPanel = () => {
  const { blogs } = useContext(UserContext);
  const sections = [
    "Blog Posts",
    "Research Papers",
    "Projects",
    "Conferences",
    "Achievements",
  ];

  const actions = ["Add", "Edit", "Delete"];
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">
        Admin Panel
      </h1>
      <p className="text-lg text-center text-black-100 mt-2">
        Select a section and action to manage content.
      </p>

      {/* Section Selection */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700">Select Section</h2>
        <select
          className="w-full p-2 mt-2 border border-blue-500 rounded"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">-- Select Section --</option>
          {sections.map((section, index) => (
            <option key={index} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {/* Action Selection */}
      {selectedSection && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">
            Select Action
          </h2>
          <select
            className="w-full p-2 mt-2 border border-blue-500 rounded"
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
          >
            <option value="">-- Select Action --</option>
            {actions.map((action, index) => (
              <option key={index} value={action}>
                {action}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Render Management Component */}
      {selectedSection && selectedAction && (
        <ManageSection section={selectedSection} action={selectedAction} />
      )}
    </div>
  );
};

const ManageSection = ({ section, action }) => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { blogs } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    date: "",
    blogImage: null,
    category: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setItems(blogs);
  }, [blogs, section, action]);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  //console.log(items);
  const handleImageChange = (e) => {
    setNewItem({ ...newItem, blogImage: e.target.files[0] });
  };

  const handleSubmit = async () => {
    if (
      action !== "Delete" &&
      (!newItem.title ||
        !newItem.description ||
        !newItem.date ||
        !newItem.category)
    ) {
      alert("All fields must be filled before submission.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", newItem.title);
      formData.append("description", newItem.description);
      formData.append("date", newItem.date);
      console.log("section");
      formData.append("category", newItem.category);
      if (newItem.blogImage) formData.append("blogImage", newItem.blogImage);
      if (section === "Blog Posts") {
        if (action === "Add") {
          const response = await axios.post(
            `${backendUrl}/api/blogs/send-blog`,
            formData
          );
          if (response.data.success) {
            setItems([...items, response.data.blog]);
            toast.success("Blog Added");
            navigate("/");
          }
        } else if (action === "Edit" && editIndex !== null) {
          const response = await axios.put(
            `${backendUrl}/api/blogs/update-blog/${items[editIndex]._id}`,
            formData
          );
          // console.log("form")
          // formData.forEach((value, key) => {
          //   console.log(`${key}: ${value}`);
          // });
          if (response.data.success) {
            toast.success("Blog Edited");
            // const updatedItems = [...items];
            // updatedItems[editIndex] = response.data.blog;
            // setItems(updatedItems);
            navigate("/");
          }
        }
      }
    } catch (err) {
      setError("Operation failed. Please try again.");
    } finally {
      setLoading(false);
      setNewItem({
        title: "",
        description: "",
        date: "",
        blogImage: null,
        category: "",
      });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewItem(items[index]);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`${backendUrl}/api/blogs/delete/${id}`);
    if (response.data.success) {
      toast.success("Blog Deleted");
      navigate("/");
      console.log("hi");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-2xl font-semibold text-blue-700">
        {action} {section}
      </h2>
      {(action === "Add" || (action === "Edit" && editIndex !== null)) && (
        <div>
          <input
            name="title"
            value={newItem.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 mt-2 border border-blue-500 rounded"
          />
          <input
            name="category"
            value={newItem.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 mt-2 border border-blue-500 rounded"
          />
          <textarea
            name="description"
            value={newItem.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 mt-2 border border-blue-500 rounded"
          />
          <input
            name="date"
            type="date"
            value={newItem.date}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-blue-500 rounded"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 mt-2 border border-blue-500 rounded"
          />

          <button
            onClick={handleSubmit}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            disabled={loading}
          >
            {loading ? "Saving..." : action}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
      {action === "Edit" && editIndex === null && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">
            Select an item to edit
          </h2>
          {items.map((item, index) => (
            <div
              key={index}
              className="mt-4 bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-500">
                  Date:{" "}
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}

      {action === "Delete" && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">
            Select an item to delete
          </h2>

          {items.map((item) => (
            <div
              key={item._id}
              className="mt-4 bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-500">Date: {item.date}</p>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
