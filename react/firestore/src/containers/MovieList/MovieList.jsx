import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies, setRefreshOnDelete }) => {
  return (
    <section className={styles.list}>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              director={movie.director}
              image={movie.image}
              yearReleased={movie.yearReleased}
              id={movie.id}
              setRefreshOnDelete={setRefreshOnDelete}
            />
          );
        })}
    </section>
  );
};

export default MovieList;
