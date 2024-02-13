import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import { createNewBlogPost } from "../../services/blog-post-services";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const navigate = useNavigate();

  const submitHandler = (data) => {
    createNewBlogPost(data)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  return (
    <main>
      <h1>Add a new post</h1>
      <AddPostForm submitHandler={submitHandler} />
    </main>
  );
};

export default AddPostPage;
