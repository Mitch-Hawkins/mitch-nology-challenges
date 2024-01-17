import { useState, useEffect } from "react";
import { getAllMovies } from "../../../services/movies";
import MovieList from "../../containers/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [refreshOnDelete, setRefreshOnDelete] = useState("");

  useEffect(() => {
    getAllMovies().then((response) => setMovies(response));
  }, [refreshOnDelete]);

  useEffect(() => {
    setRefreshOnDelete("");
  }, [movies]);

  return (
    <main>
      <h1>Firestore movie collection</h1>
      {movies && (
        <MovieList movies={movies} setRefreshOnDelete={setRefreshOnDelete} />
      )}
    </main>
  );
};

export default HomePage;
