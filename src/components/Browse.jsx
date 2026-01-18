import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainVideo from "./MainVideo";
import MovieRecommendation from "./MovieRecommendation";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainVideo />
      <MovieRecommendation />
    </div>
  );
};

export default Browse;
