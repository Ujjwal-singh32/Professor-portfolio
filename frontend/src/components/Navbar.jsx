import React, { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    blogs: false,
    researchPapers: false,
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  return (
    <nav
      className="shadow-md py-4 px-6 flex justify-between items-center relative"
      style={{
        background:
          "linear-gradient(90deg, rgba(88,58,180,0.824) 10%, rgba(131,58,180,0.821) 55%, rgba(252,69,202,0.709) 93%, rgba(253,29,29,0.611) 100%)",
      }}
    >
      <div className="flex items-center space-x-4">
        <img
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Professor"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <h1 className="text-2xl font-bold text-white hidden md:block">
          Dinesh Kumar
        </h1>
      </div>

      <div className="hidden md:flex space-x-6">
        <a
          href="#projects"
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Projects
        </a>
        <a
          href="#research"
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Research
        </a>
        <a
          href="#admin"
          className="text-white font-semibold px-4 py-2 rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Admin
        </a>
      </div>

      <div className="flex space-x-2 relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full md:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 border-2 border-white text-white rounded-lg bg-transparent transition duration-300 hover:bg-white hover:text-purple-600"
          onClick={toggleFilter}
        >
          Filter
        </button>
        {isFilterOpen && (
          <div className="absolute right-0 mt-12 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-50">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="blogs"
                checked={filters.blogs}
                onChange={handleFilterChange}
              />
              <span>Blogs</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                name="researchPapers"
                checked={filters.researchPapers}
                onChange={handleFilterChange}
              />
              <span>Research Papers</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                name="projects"
                checked={filters.projects}
                onChange={handleFilterChange}
              />
              <span>Projects</span>
            </label>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
