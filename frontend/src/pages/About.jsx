import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-200 to-purple-300 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">About the Professor</h1>
      <p className="text-lg text-center text-black-100 mt-2">A brief introduction to academic and research contributions.</p>
      
      {/* Introduction */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="text-gray-700 mt-2">
          Dr. John Doe is a distinguished professor of Artificial Intelligence at XYZ University, specializing in
          machine learning, neural networks, and data science. With over 20 years of experience in academia and industry,
          he has contributed to groundbreaking research in AI ethics and automation.
        </p>
      </div>
      
      {/* Academic Background */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Academic Background</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Ph.D. in Artificial Intelligence</strong> – ABC University (Year)</li>
          <li><strong>M.Sc. in Computer Science</strong> – DEF University (Year)</li>
          <li><strong>B.Sc. in Mathematics</strong> – GHI University (Year)</li>
        </ul>
      </div>
      
      {/* Research Interests */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Research Interests</h2>
        <p className="text-gray-700 mt-2">
          Dr. Doe's research focuses on:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Machine Learning & Neural Networks</li>
          <li>AI Ethics and Fairness</li>
          <li>Automation and Robotics</li>
          <li>Data Science and Big Data Analytics</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
