import React from "react";

const Collaborations = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-100 to-blue-200 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">Collaborations</h1>
      <p className="text-lg text-center text-black-100 mt-2">Academic and research partnerships across institutions and industries.</p>
      
      {/* Collaborations List */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Institutional Collaborations</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Research Partnership with ABC University on AI Ethics</li>
          <li>Joint Project with XYZ Institute on Machine Learning Applications</li>
          <li>Collaboration with DEF Lab for Robotics Innovations</li>
        </ul>
      </div>
      
      {/* Industry Collaborations */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Industry Collaborations</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>AI Development Partnership with TechCorp</li>
          <li>Data Science Research with InnovateAI</li>
          <li>Consultancy for Automation at SmartSystems Ltd.</li>
        </ul>
      </div>
      
      {/* Future Collaboration Opportunities */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Opportunities for Collaboration</h2>
        <p className="text-gray-700 mt-2">
          Dr. John Doe is open to new collaborations in AI research, data science, and interdisciplinary projects. If you
          are interested in working together, please get in touch.
        </p>
      </div>
    </div>
  );
};

export default Collaborations;
