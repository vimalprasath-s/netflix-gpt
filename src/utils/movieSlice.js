import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerDetails: null,
    upcomingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    movieTrailer: (state, action) => {
      state.movieTrailerDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  movieTrailer,
  addTopRatedMovies,
  addUpcomingMovies,
  addPopularMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
