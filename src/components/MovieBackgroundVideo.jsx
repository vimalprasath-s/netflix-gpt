import { useSelector } from "react-redux";
import useGetBackgroundTrailer from "../hooks/useGetBackgroundTrailer";
import { TEMP_TRAILER_KEY } from "../constants/constants";

const MovieBackgroundVideo = ({ movieId }) => {
  const trailerData = useSelector(
    (store) => store?.movies?.movieTrailerDetails
  );
  useGetBackgroundTrailer(movieId);
  console.log(trailerData);
  return (
    <div>
      <iframe
        // src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1`}
        src={`https://www.youtube.com/embed/${TEMP_TRAILER_KEY}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-screen aspect-video"
        allowFullScreen
        aria-controls="0"
      ></iframe>
    </div>
  );
};

export default MovieBackgroundVideo;
