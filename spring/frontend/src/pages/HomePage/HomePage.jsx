import React, { useContext, useEffect } from "react";
import BlogPostList from "../../containers/BlogPostList/BlogPostList";
import { useNavigate } from "react-router-dom";
import { BlogsDataContext } from "../../context/BlogsDataContextProvider";
import { getAllBlogPosts } from "../../services/blog-post-services";

const HomePage = () => {
  const navigate = useNavigate();

  const { blogsData, setBlogsData } = useContext(BlogsDataContext);

  useEffect(() => {
    getAllBlogPosts()
      .then((data) => {
        setBlogsData([...data]);
        console.log(data);
      })
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/add")}>Add New Post</button>
      <BlogPostList />
    </div>
  );
};

export default HomePage;
