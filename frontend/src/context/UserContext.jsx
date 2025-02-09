import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [research, setresearch] = useState([]);
  const [achieve, setachieve] = useState([]);
  const [project, setproject] = useState([]);
  const [conference, setconference] = useState([]);
  const [award, setaward] = useState([]);
  const [collaborators, setcollaborators] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/blogs/get-total-blogs`
        );
        // console.log(response.data.blogs);
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
        // console.log(response.data.Researchs);
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
        // console.log(response.data.projects);
        setproject(response.data.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    const interval = setInterval(fetchProjects(), 3000);
    return () => clearInterval(interval);
  }, [backendUrl]);
  useEffect(() => {
    const fetchcollab = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/collab/get-total-collab`
        );
         //console.log(response.data.Collabs);
        setcollaborators(response.data.Collabs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchcollab();
  }, [backendUrl]);
  useEffect(() => {
    const fetchach = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/achive/get-total-achives`
        );
        //  console.log(response.data.ach);
        setachieve(response.data.ach);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchach();
  }, [backendUrl]);

  useEffect(() => {
    const fetchConf = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/conference/get-total-Conferences`
        );
        // console.log(response.data.blogs);
        setconference(response.data.conf);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConf();
  }, [backendUrl]);

  useEffect(() => {
    const fetchaward = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/award/get-total-awards`
        );
        // console.log(response.data.blogs);
        setaward(response.data.award);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchaward();
  }, [backendUrl]);
  //console.log(research);
  //console.log(project)
  // console.log(achieve)
  // console.log(award);
  // console.log(conference);
  //console.log(collaborators);
  const value = {
    blogs,
    loading,
    error,
    backendUrl,
    research,
    project,
    achieve,
    conference,
    award,
    collaborators
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
