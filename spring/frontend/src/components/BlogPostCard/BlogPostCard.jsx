import React, { useContext } from "react";
import { deleteBlogPost } from "../../services/blog-post-services";
import { BlogsDataContext } from "../../context/BlogsDataContextProvider";
import { useNavigate } from "react-router-dom";

const BlogPostCard = ({ blog }) => {
  const { blogsData, setBlogsData } = useContext(BlogsDataContext);
  const navigate = useNavigate();
  const handleEditPost = () => {
    navigate(`/edit/${blog.id}`);
  };

  const handleDeletePost = () => {
    deleteBlogPost(blog.id);
    // let tmp = [...blogsData];
    // const blogToBeDeleted =
    //   blogsData[blogsData.indexOf((b) => b.id == blog.id)];
    // const filteredTmp = tmp.filter((b) => b != blogToBeDeleted);
    // setBlogsData([...filteredTmp]);
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <h5>{blog.category}</h5>
      <p>{blog.content}</p>
      <button onClick={handleEditPost}>Edit Post</button>
      <button onClick={handleDeletePost}>Delete Post</button>
    </div>
  );
};

export default BlogPostCard;
