import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const topRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data?.results));
    };
    topRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
