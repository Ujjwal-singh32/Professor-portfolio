import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Awards1 = () => {
  const { award } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = award.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      <div className="max-w-4xl mx-auto rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg md:ml-4">
            Awards
          </h1>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-3 border-black-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="space-y-4">
          {filteredProjects.map((award) => (
            <div
              key={award.id}
              className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-md mt-4"
            >
              <h2 className="text-3xl font-semibold text-black-700">
                {award.name}
              </h2>
              <p className="text-gray-600 mt-2">{award.description}</p>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                Year: {award.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards1;
