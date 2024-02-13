import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import {
  getBlogPostById,
  updateBlogPost,
} from "../../services/blog-post-services";

const EditPostPage = () => {
  const navigate = useNavigate();

  const [prevBlogData, setPrevBlogData] = useState(null);

  const pathVariables = useParams();
  const id = pathVariables.id;

  const submitHandler = (data) => {
    updateBlogPost(id, data)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getBlogPostById(id)
      .then((res) => {
        console.log("prevBlogData : ", res);
        setPrevBlogData(res);
      })
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <main>
      <h1>Edit an existing post</h1>
      {prevBlogData && (
        <AddPostForm
          submitHandler={submitHandler}
          preExistTitle={prevBlogData.title}
          preExistCategory={prevBlogData.category}
          preExistContent={prevBlogData.content}
        />
      )}
    </main>
  );
};

export default EditPostPage;
