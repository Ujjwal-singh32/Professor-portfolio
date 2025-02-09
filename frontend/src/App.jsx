import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Conferences from "./pages/Conferences";
import About from "./pages/About";
import BlogPosts from "./pages/Blogposts";
import Achievements from "./pages/Achivements";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import TeachingExperience from "./pages/Teachingexp";
import AdminPanel from "./pages/Adminpannel";
import ResearchPapers from "./pages/Researchpaper";
import Collaborations from "./pages/Collabrations";
import BlogDetails from "./pages/BlogDetails";
import {ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/teachingexp" element={<TeachingExperience />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/research" element={<ResearchPapers />} />
        <Route path="/collab" element={<Collaborations />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
};

export default App;
