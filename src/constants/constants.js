export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";
export const USER_LOGO =
  "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDB_BEARER_TOKEN,
  },
};

export const API_KEY = import.meta.env.VITE_API_KEY;

export const TEMP_TRAILER_KEY = "fJaAYcERf3Y";
