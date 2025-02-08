import React from "react";

const Conferences = () => {
  const conferenceList = [
    { title: "International AI Summit", description: "A global summit discussing advancements in artificial intelligence.", date: "Jan 25, 2024", link: "#" },
    { title: "Blockchain and Cybersecurity Conference", description: "Exploring the role of blockchain in securing digital transactions.", date: "Feb 15, 2024", link: "#" },
    { title: "Quantum Computing Symposium", description: "Latest research in quantum computing applications.", date: "Mar 10, 2024", link: "#" },
    { title: "Ethics and AI Conference", description: "Addressing the ethical concerns of artificial intelligence.", date: "Apr 5, 2024", link: "#" },
    { title: "IoT and Smart Cities Forum", description: "How IoT is transforming urban development.", date: "May 20, 2024", link: "#" },
    { title: "Data Science and Big Data Expo", description: "Innovations and challenges in big data analytics.", date: "Jun 8, 2024", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Conferences</h1>
      <p className="text-lg text-center text-gray-100 mt-2">A collection of conferences attended and presented.</p>
      
      {/* Conferences List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {conferenceList.map((conference, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{conference.title}</h2>
              <p className="text-gray-700 mt-2">{conference.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date: {conference.date}</p>
            </div>
            <a href={conference.link} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
