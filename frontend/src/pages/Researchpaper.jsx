import { useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
const ResearchPapers = () => {
 
  const navigate = useNavigate();
   const { research, backendUrl } = useContext(UserContext);
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-green-200 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">Research Papers</h1>
      <p className="text-lg text-center text-black-100 mt-2">A collection of published research papers.</p>
      
      {/* Papers List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {research.map((paper) => (
          <div key={paper._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{paper.title}</h2>
              <p className="text-gray-700 mt-2">{paper.topic}</p>
              <p className="text-sm text-gray-500 mt-1">Date of Publication: {paper.date}</p>
            </div>
            <p className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => navigate(`/research/${paper._id}`)}>View</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
