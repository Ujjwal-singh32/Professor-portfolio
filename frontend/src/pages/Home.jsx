import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const sections = [
    { name: "About the Professor", route: "/about" },
    { name: "Research Papers", route: "/research" },
    { name: "Projects", route: "/projects" },
    { name: "Conferences", route: "/conferences" },
    { name: "Achievements", route: "/achievements" },
    { name: "Blog Posts", route: "/blog" },
    { name: "Teaching Experience", route: "/teachingexp" },
    { name: "Awards", route: "/awards" },
    { name: "Collaborations", route: "/collab" },
  ];
   const handleHome = () =>{
    navigate("/");
   }
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-gray-900">
      {/* Hero Section */}
      <header
        className="relative text-white py-32 text-center bg-opacity-80 bg-cover bg-center cursor-pointer"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Welcome to the Portfolio
          </h1>
          <p className="mt-4 text-xl font-light">
            Showcasing Research, Projects, and Achievements
          </p>
        </div>
      </header>

      {/* Sections Grid */}
      <section className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div
            key={section.name}
            className="bg-white p-8 shadow-2xl rounded-xl transform transition-all duration-300 ease-out hover:scale-110 hover:rotate-2 hover:shadow-xl cursor-pointer hover:bg-pink-300 hover:text-white"
            onClick={() => navigate(section.route)}
          >
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              {section.name}
            </h3>
            <p className="text-gray-600 mt-4 text-center">
              View all {section.name.toLowerCase()}.
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        className="text-white text-center p-6 mt-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(88,58,180,0.824) 10%, rgba(131,58,180,0.821) 55%, rgba(252,69,202,0.709) 93%, rgba(253,29,29,0.611) 100%)",
        }}
      >
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Professor's Portfolio. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
