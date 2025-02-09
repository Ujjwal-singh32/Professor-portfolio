import React from "react";

import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
  
    const value = {
      blogs,
      loading,
      error,
    };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
