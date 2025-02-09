import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

const Projects = () => {
  const navigate = useNavigate();
  const { project } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = project.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-purple-100 to-indigo-200 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header with Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg md:ml-4">My Projects</h1>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border-3 border-black-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <p className="text-lg text-center text-black-100 mt-2">Showcasing research and development projects.</p>
      
      {/* Projects Grid - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {filteredProjects.map((p) => (
          <div key={p._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{p.title}</h2>
              <p className="text-gray-700 mt-2">{p.category}</p>
              <p className="text-sm text-gray-500 mt-1">Date of Creation:  {new Date(p.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}</p>
            </div>
            <p 
              className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              onClick={() => navigate(`/project/${p._id}`)}
            >
              View
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;