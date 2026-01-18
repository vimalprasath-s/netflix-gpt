import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const popularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    };
    popularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
