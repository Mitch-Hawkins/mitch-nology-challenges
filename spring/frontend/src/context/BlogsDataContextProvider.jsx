import React, { createContext, useEffect, useState } from "react";
import { getAllBlogPosts } from "../services/blog-post-services";

export const BlogsDataContext = createContext(null);

const BlogsDataContextProvider = ({ children }) => {
  const [blogsData, setBlogsData] = useState([]);

  return (
    <BlogsDataContext.Provider value={{ blogsData, setBlogsData }}>
      {children}
    </BlogsDataContext.Provider>
  );
};

export default BlogsDataContextProvider;
