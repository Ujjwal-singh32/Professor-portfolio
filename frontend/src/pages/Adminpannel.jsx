import React, { useState } from "react";

const AdminPanel = () => {
  const sections = ["Blog Posts", "Research Papers", "Projects", "Conferences", "Achievements"];
  const actions = ["Add", "Edit", "Delete"];
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Admin Panel</h1>
      <p className="text-lg text-center text-gray-100 mt-2">Select a section and action to manage content.</p>
      
      {/* Section Selection */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700">Select Section</h2>
        <select className="w-full p-2 mt-2 border border-blue-500 rounded" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="">-- Select Section --</option>
          {sections.map((section, index) => (
            <option key={index} value={section}>{section}</option>
          ))}
        </select>
      </div>
      
      {/* Action Selection */}
      {selectedSection && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">Select Action</h2>
          <select className="w-full p-2 mt-2 border border-blue-500 rounded" value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)}>
            <option value="">-- Select Action --</option>
            {actions.map((action, index) => (
              <option key={index} value={action}>{action}</option>
            ))}
          </select>
        </div>
      )}
      
      {/* Render Management Component */}
      {selectedSection && selectedAction && <ManageSection section={selectedSection} action={selectedAction} />}
    </div>
  );
};

const ManageSection = ({ section, action }) => {
  const [items, setItems] = useState([
    { title: "Sample Title", description: "Sample Description", date: "2024-01-01", image: "" }
  ]);
  const [newItem, setNewItem] = useState({ title: "", description: "", date: "", image: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewItem({ ...newItem, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (type) => {
    if (!newItem.title || !newItem.description || !newItem.date) {
      alert("All fields must be filled before submission.");
      return;
    }
    if (type === "Add") {
      setItems([...items, newItem]);
    } else if (type === "Edit") {
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setEditIndex(null);
    }
    setNewItem({ title: "", description: "", date: "", image: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewItem(items[index]);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700">{action} {section}</h2>
      
      {(action === "Add" || (action === "Edit" && editIndex !== null)) && (
        <div>
          <input name="title" value={newItem.title} onChange={handleChange} placeholder="Title" className="w-full p-2 mt-2 border border-blue-500 rounded" />
          <input name="description" value={newItem.description} onChange={handleChange} placeholder="Description" className="w-full p-2 mt-2 border border-blue-500 rounded" />
          <input name="date" value={newItem.date} onChange={handleChange} placeholder="Date" className="w-full p-2 mt-2 border border-blue-500 rounded" />
          <input type="file" onChange={handleImageChange} className="w-full p-2 mt-2 border border-blue-500 rounded" />
          <button onClick={() => handleSubmit(action)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">{action}</button>
        </div>
      )}
      
      {action === "Edit" && editIndex === null && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">Select an item to edit</h2>
          {items.map((item, index) => (
            <div key={index} className="mt-4 bg-gray-200 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-500">Date: {item.date}</p>
              </div>
              <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
