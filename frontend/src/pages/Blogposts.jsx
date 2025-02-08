import React from "react";

const BlogPosts = () => {
  const blogList = [
    { title: "The Future of Artificial Intelligence", description: "Exploring trends and advancements in AI technology.", date: "Jan 10, 2024", link: "#" },
    { title: "Ethical Challenges in Machine Learning", description: "Discussing fairness and bias in AI models.", date: "Feb 15, 2024", link: "#" },
    { title: "Blockchain Beyond Cryptocurrency", description: "Understanding blockchain applications in various industries.", date: "Mar 5, 2024", link: "#" },
    { title: "How IoT is Revolutionizing Smart Cities", description: "Analyzing the impact of IoT on urban development.", date: "Apr 22, 2024", link: "#" },
    { title: "Quantum Computing: A Game Changer", description: "An introduction to quantum computing and its potential.", date: "May 18, 2024", link: "#" },
    { title: "Data Science in Healthcare", description: "How big data is transforming the medical field.", date: "Jun 8, 2024", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Blog Posts</h1>
      <p className="text-lg text-center text-gray-100 mt-2">Insights, research, and discussions from various fields.</p>
      
      {/* Blog Posts List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {blogList.map((blog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date: {blog.date}</p>
            </div>
            <a href={blog.link} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
