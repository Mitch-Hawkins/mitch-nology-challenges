import React, { useContext } from "react";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { BlogsDataContext } from "../../context/BlogsDataContextProvider";

const BlogPostList = () => {
  const { blogsData, setBlogsData, postDeleted, setPostDeleted } =
    useContext(BlogsDataContext);
  return (
    <div>
      {blogsData &&
        blogsData.map((blog) => {
          return <BlogPostCard key={blog.id} blog={blog} />;
        })}
    </div>
  );
};

export default BlogPostList;
