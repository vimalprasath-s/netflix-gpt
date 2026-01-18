import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const nowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data?.results));
    };
    nowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
