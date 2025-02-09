import React from "react";
import { useContext,useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
const Conferences = () => {
  const { conference } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProjects = conference.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg md:ml-4">
          Conferences
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
        A collection of conferences attended and presented.
      </p>

      {/* Conferences List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {filteredProjects.map((conference) => (
          <div
            key={conference._id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {conference.name}
              </h2>
              <p className="text-gray-700 mt-2">{conference.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Date: {new Date(conference.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
