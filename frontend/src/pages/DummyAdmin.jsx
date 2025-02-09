import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const sections = [
    "Blog Posts",
    "Research Papers",
    "Projects",
    "Conferences",
    "Achievements",
    "Awards"
  ];

  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (e) => {
    const section = e.target.value;
    setSelectedSection(section);
    if (section) navigate(`/admin/${section.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">
        Admin Panel
      </h1>
      <p className="text-lg text-center text-black-100 mt-2">
        Select a section to manage content.
      </p>

      {/* Section Selection */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700">Select Section</h2>
        <select
          className="w-full p-2 mt-2 border border-blue-500 rounded"
          value={selectedSection}
          onChange={handleSectionChange}
        >
          <option value="">-- Select Section --</option>
          {sections.map((section, index) => (
            <option key={index} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdminPanel;
