import React from "react";
import { TMDB_IMAGE_CDN } from "../constants/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div>
      <img
        className="rounded-md w-40"
        src={TMDB_IMAGE_CDN + posterPath}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
