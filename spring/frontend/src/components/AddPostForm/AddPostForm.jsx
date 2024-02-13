import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddPostForm = ({
  submitHandler,
  preExistTitle,
  preExistCategory,
  preExistContent,
}) => {
  const schema = z.object({
    title: z.string().min(1, "Title needs to be at least one character long"),
    category: z
      .string()
      .min(1, "Category needs to be at least one character long"),
    content: z
      .string()
      .min(1, "Content needs to be at least one character long")
      .max(255, "Content cannot exceed 255 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is Required" })}
          //   key="titleKey"
          defaultValue={preExistTitle}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          {...register("category", { required: "Category is Required" })}
          //   key="categoryKey"
          defaultValue={preExistCategory}
        />
        {errors.category && <p>{errors.category.message}</p>}
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <input
          type="text"
          id="content"
          {...register("content", { required: "Content is Required" })}
          //   key="contentKey"
          defaultValue={preExistContent}
        />
        {errors.content && <p>{errors.content.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPostForm;
