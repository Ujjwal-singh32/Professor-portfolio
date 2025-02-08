import React from "react";

const ResearchPapers = () => {
  const paperList = [
    { title: "Advancements in Neural Networks", description: "Exploring deep learning techniques for AI.", date: "Jan 10, 2024", link: "#" },
    { title: "Quantum Computing and AI Integration", description: "A study on the impact of quantum computing on artificial intelligence.", date: "Feb 5, 2024", link: "#" },
    { title: "Blockchain for Secure Data Transmission", description: "Enhancing cybersecurity using blockchain technology.", date: "Mar 22, 2024", link: "#" },
    { title: "Ethical Considerations in AI Development", description: "Addressing ethical challenges in artificial intelligence.", date: "Apr 18, 2024", link: "#" },
    { title: "IoT and Smart Cities", description: "The role of IoT in shaping urban environments.", date: "May 9, 2024", link: "#" },
    { title: "Natural Language Processing for Sentiment Analysis", description: "Analyzing human emotions through text processing.", date: "Jun 2, 2024", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-green-200 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Research Papers</h1>
      <p className="text-lg text-center text-gray-100 mt-2">A collection of published research papers.</p>
      
      {/* Papers List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {paperList.map((paper, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{paper.title}</h2>
              <p className="text-gray-700 mt-2">{paper.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date of Publication: {paper.date}</p>
            </div>
            <a href={paper.link} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
