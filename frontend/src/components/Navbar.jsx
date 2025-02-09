import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 cursor-pointer"
      style={{
        background:
          "linear-gradient(90deg, rgba(88,58,180,0.824) 10%, rgba(131,58,180,0.821) 55%, rgba(252,69,202,0.709) 93%, rgba(253,29,29,0.611) 100%)",
      }}
    >
      {/* Left Section - Professor Name */}
      <h1
        className="text-2xl font-bold text-white"
        onClick={() => navigate("/")}
      >
        Dinesh Kumar
      </h1>

      {/* Middle Section - NIT Jamshedpur (Visible on Large Screens Only) */}
      <h2 className="text-xl font-semibold text-white lg:flex hidden">
        राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
      </h2>

      {/* Medium and Large Screens: Show Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <p
          onClick={() => navigate("/projects")}
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Projects
        </p>
        <p
          onClick={() => navigate("/research")}
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Research
        </p>
        <p
          onClick={() => navigate("/admin")}
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Admin
        </p>
      </div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-40 bg-white text-black rounded-lg shadow-lg p-4 z-50 flex flex-col space-y-2">
          <p
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/projects");
            }}
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Projects
          </p>
          <p
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/research");
            }}
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Research
          </p>
          <p
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/admin");
            }}
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Admin
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
