import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Conferences from "./pages/Conferences";
import About from "./pages/About";
import BlogPosts from "./pages/Blogposts";
import Achievements from "./pages/Achivements";
import Projects from "./pages/Projects";
import Awards1 from "./pages/Awards1";
import TeachingExperience from "./pages/Teachingexp";
// import AdminPanel from "./pages/Adminpannel";
import AdminPanel from "./pages/DummyAdmin";
import ResearchPapers from "./pages/Researchpaper";
import Collaborations from "./pages/Collabrations";
import BlogDetails from "./pages/BlogDetails";
import { ToastContainer } from "react-toastify";
import AdminPanelBlog from "./pages/AdminBlog";
import AdminPanelResearch from "./pages/AdminResearch";
import AdminPanelAchive from "./pages/AdminAchive";
import ResearchDetails from "./pages/ResearchDetails";
import AdminPanelProject from "./pages/AdminProject";
import ProjectDetails from "./pages/ProjectDetails";
import AdminPanelConference from "./pages/AdminConference";
import AdminPanelAward from "./pages/AdminAwards";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards1 />} />
        <Route path="/teachingexp" element={<TeachingExperience />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/research" element={<ResearchPapers />} />
        <Route path="/collab" element={<Collaborations />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/admin/blog-posts" element={<AdminPanelBlog />} />
        <Route path="/admin/research-papers" element={<AdminPanelResearch />} />
        <Route path="/admin/achievements" element={<AdminPanelAchive />} />
        <Route path="/admin/projects" element={<AdminPanelProject />} />
        <Route path="/admin/conferences" element={<AdminPanelConference />} />
        <Route path="/admin/awards" element={<AdminPanelAward />} />
        <Route path="/research/:id" element={<ResearchDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
};

export default App;
