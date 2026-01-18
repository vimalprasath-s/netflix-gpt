import { useSelector } from "react-redux";
import MovieTexts from "./MovieTexts";
import MovieBackgroundVideo from "./MovieBackgroundVideo";

const MainVideo = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const nowPlayMovie = movies[0];
  const { id, original_title, overview } = nowPlayMovie;
  return (
    <div>
      <MovieTexts title={original_title} description={overview} />
      <MovieBackgroundVideo movieId={id} />
    </div>
  );
};

export default MainVideo;
