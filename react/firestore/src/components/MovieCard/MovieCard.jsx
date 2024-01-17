import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import { deleteMovie } from "../../../services/movies";

const MovieCard = ({
  image = "",
  title = "Title not provided",
  director = "",
  yearReleased = "",
  id,
  setRefreshOnDelete,
}) => {
  const handleClick = () => {
    console.log(`${title} will be deleted`);
    deleteMovie(id).then((res) => setRefreshOnDelete(res));
  };

  return (
    <article className={styles.card}>
      <div>
        <button onClick={handleClick}>Delete Movie</button>
      </div>
      <img className={styles.image} src={image} alt="movie poster" />
      <h3>{title}</h3>
      <p>Director : {director}</p>
      <p>Year released: {yearReleased}</p>
      <Link to={`/movies/${id}`}>More Info</Link>
    </article>
  );
};

export default MovieCard;
