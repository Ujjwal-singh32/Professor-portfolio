import React from "react";

const Achievements = () => {
  const achievementList = [
    { title: "Best Researcher Award", description: "Awarded for outstanding contributions to AI research.", date: "Jan 2024", link: "#" },
    { title: "Innovator of the Year", description: "Recognized for pioneering work in machine learning applications.", date: "Feb 2023", link: "#" },
    { title: "Top Educator Award", description: "Honored for excellence in teaching and mentorship.", date: "Mar 2022", link: "#" },
    { title: "AI Ethics Leadership Recognition", description: "Acknowledged for work in ethical AI development.", date: "Apr 2021", link: "#" },
    { title: "Best Paper Award", description: "Received for a groundbreaking paper on neural networks.", date: "May 2020", link: "#" },
    { title: "Lifetime Achievement in AI", description: "Awarded for long-term contributions to AI advancements.", date: "Jun 2019", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Achievements</h1>
      <p className="text-lg text-center text-gray-100 mt-2">Recognitions and awards received over the years.</p>
      
      {/* Achievements List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {achievementList.map((achievement, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{achievement.title}</h2>
              <p className="text-gray-700 mt-2">{achievement.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date: {achievement.date}</p>
            </div>
            <a href={achievement.link} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
