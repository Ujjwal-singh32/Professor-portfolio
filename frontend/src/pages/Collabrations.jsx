import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

const Collaborations = () => {
  const { collaborators } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredresearch = collaborators.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-100 to-blue-200 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg md:ml-4">
          Collaborations
        </h1>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border-3 border-black-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <p className="text-lg text-center text-black-100 mt-2">
        Academic and research partnerships across institutions and industries.
      </p>

      {/* Collaborations List */}
      <div className="mt-8 space-y-6">
        {filteredresearch && filteredresearch.length > 0 ? (
          filteredresearch.map((collab) => (
            <div key={collab._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">
                {collab.title}
              </h2>
              <p className="text-gray-700 mt-2">{collab.description}</p>

              <p className="text-sm text-gray-500 mt-1">Professors:</p>
              <ul className="list-disc list-inside text-gray-700">
                {collab.professors.map((professor, index) => (
                  <li key={index}>{professor}</li> // ✅ Displays each professor on a new line
                ))}
              </ul>

              <p className="text-sm text-gray-500 mt-1">
                Start Date:{" "}
                {new Date(collab.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No collaborations found.</p>
        )}
      </div>
    </div>
  );
};

export default Collaborations;
