import { useParams } from "react-router-dom";
import { getMovieById } from "../../../services/movies";
import { useState, useEffect } from "react";
import styles from "./MoviePage.module.scss";

const MoviePage = () => {
  //to access something from the url I have a useParams hook
  const pathVariables = useParams();
  const id = pathVariables.id;

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieById(id)
      .then((res) => setMovie(res))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {loading && <p>...Loading</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && movie && (
        <>
          <h1>{movie.title}</h1>
          <div className={styles.info}>
            <img src={movie.image} />
          </div>
          <p>Directed by {movie.director}</p>
          <p>Released in {movie.yearReleased}</p>
          <p>Watched {movie.timesWatched} times</p>
        </>
      )}
    </main>
  );
};

export default MoviePage;
