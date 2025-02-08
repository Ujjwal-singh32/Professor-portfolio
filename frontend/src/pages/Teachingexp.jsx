import React from "react";

const TeachingExperience = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-indigo-200 to-blue-300 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Teaching Experience</h1>
      <p className="text-lg text-center text-gray-100 mt-2">An overview of courses taught and academic contributions.</p>
      
      {/* Experience List */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Courses Taught</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Introduction to Artificial Intelligence - XYZ University</li>
          <li>Machine Learning & Deep Learning - ABC University</li>
          <li>Data Science and Analytics - DEF University</li>
          <li>Ethics in AI - XYZ University</li>
        </ul>
      </div>
      
      {/* Teaching Philosophy */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Teaching Philosophy</h2>
        <p className="text-gray-700 mt-2">
          Dr. John Doe believes in an interactive, student-centered approach to teaching, encouraging critical thinking
          and hands-on learning. His courses incorporate real-world applications and cutting-edge research to keep students
          engaged and prepared for future challenges.
        </p>
      </div>
    </div>
  );
};

export default TeachingExperience;
