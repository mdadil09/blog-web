import React, { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);
  console.log(user);
  return (
    <BlogContext.Provider value={{ user }}>{children}</BlogContext.Provider>
  );
};

export const BlogState = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
