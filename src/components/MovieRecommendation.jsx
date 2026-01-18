import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieRecommendation = () => {
  const movieLists = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="bg-transparent -mt-60 z-2 relative">
        <MovieList title="Now Playing" movies={movieLists?.nowPlayingMovies} />
      </div>
      <MovieList title="Top Rated" movies={movieLists?.topRatedMovies} />
      <MovieList title="Popular" movies={movieLists?.popularMovies} />
      <MovieList title="Upcoming Movies" movies={movieLists?.upcomingMovies} />
    </div>
  );
};

export default MovieRecommendation;
