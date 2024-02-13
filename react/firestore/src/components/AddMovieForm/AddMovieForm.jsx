import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AddMovieForm.module.scss";

const AddMovieForm = ({ submitHandler }) => {
  const schema = z.object({
    title: z.string().min(1, "Title needs to be at least one character long"),
    director: z
      .string()
      .min(1, "Director name needs to be at least one character long"),
    yearReleased: z.coerce
      .number()
      .min(1890, "Year needs to be later than 1890")
      .max(2030, "Year needs to be earlier than 2030"),
    image: z.string().url(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  //   console.log(errors, "errors");

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is Required" })}
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="director">Director: </label>
        <input type="text" id="director" {...register("director")} />
      </div>
      {errors.director && (
        <p className={styles.error}>{errors.director.message}</p>
      )}
      <div>
        <label htmlFor="yearReleased">Year Released: </label>
        <input type="number" id="yearReleased" {...register("yearReleased")} />
      </div>
      {errors.yearReleased && (
        <p className={styles.error}>{errors.yearReleased.message}</p>
      )}
      <div>
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" {...register("image")} />
      </div>
      {errors.image && <p className={styles.error}>{errors.image.message}</p>}
      <button type="submit">Create movie</button>
    </form>
  );
};

export default AddMovieForm;
