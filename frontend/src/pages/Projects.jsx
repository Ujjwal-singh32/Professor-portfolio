import React from "react";

const Projects = () => {
  const projectList = [
    { title: "AI-Powered Healthcare Diagnosis System", description: "A machine learning model for medical diagnostics.", date: "Jan 15, 2024", link: "#" },
    { title: "Machine Learning Model for Climate Prediction", description: "Predicting climate changes using AI.", date: "Feb 10, 2024", link: "#" },
    { title: "Blockchain-Based Secure Data Storage", description: "Enhancing data security with blockchain technology.", date: "Mar 5, 2024", link: "#" },
    { title: "Autonomous Robotics for Industrial Automation", description: "Developing self-operating robots for industries.", date: "Apr 20, 2024", link: "#" },
    { title: "Natural Language Processing for Sentiment Analysis", description: "Understanding human emotions through text.", date: "May 12, 2024", link: "#" },
    { title: "IoT-Enabled Smart Agriculture System", description: "Implementing IoT for efficient farming solutions.", date: "Jun 8, 2024", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-purple-100 to-indigo-200 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">My Projects</h1>
      <p className="text-lg text-center text-gray-100 mt-2">Showcasing research and development projects.</p>
      
      {/* Projects Grid - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date of Creation: {project.date}</p>
            </div>
            <a href={project.link} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
