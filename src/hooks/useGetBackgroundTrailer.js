import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../utils/movieSlice";

const useGetBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTrailerLink = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const filteredData = data?.results?.filter(
        (video) => video?.type === "Trailer"
      );
      const trailer = filteredData ? filteredData[0] : data.results[0]; // Edge case if we have multiple trailer and no trailer data
      dispatch(movieTrailer(trailer));
      console.log("background video", data, filteredData, trailer);
    };
    getTrailerLink();
  }, [dispatch, movieId]);
};

export default useGetBackgroundTrailer;
