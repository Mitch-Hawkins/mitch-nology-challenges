import { useState, useEffect } from "react";
import MovieList from "../../containers/MovieList/MovieList";
import { subscribeToMovies } from "../../../services/movies";

const LiveHomePage = () => {
  const [liveMovies, setLiveMovies] = useState(null);

  useEffect(() => {
    const unsubscribeFunction = subscribeToMovies(setLiveMovies);

    return () => unsubscribeFunction();
  }, []);

  console.log(liveMovies);

  return (
    <main>
      <h1>Live movies page</h1>
      {liveMovies && <MovieList movies={liveMovies} />}
    </main>
  );
};

export default LiveHomePage;
