import React from "react";
import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { createBlog } from "../../../backend/controllers/blogController";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [research, setresearch] = useState([]);
const [project, setproject] = useState([])
const [achievements , setachievements] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/blogs/get-total-blogs`
        );
        console.log(response.data.blogs);
        setBlogs(response.data.blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [backendUrl]);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/researchs/get-total-researchs`
        );
        console.log(response.data.Researchs);
        setresearch(response.data.Researchs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, [backendUrl]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/projects/get-total-projects`
        );
        console.log(response.data.projects);
        setproject(response.data.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [backendUrl]);
  useEffect(() => {
    const fetchachievement = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/achive/get-total-achieves`
        );
        console.log(response.data.ach);
        setachievements(response.data.ach);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchachievement();
  }, [backendUrl]);
  //console.log(research);
  //console.log(project)
  console.log(achievements);
  const value = {
    blogs,
    loading,
    error,
    backendUrl,
    research,
    project
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;