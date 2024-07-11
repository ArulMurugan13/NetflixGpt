import React from "react";
import MovieContainer from "./MovieContainer";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies);

  const nowPlaying = movies?.nowPlayingMovies;
  const popularMovies = movies?.popularMovies;
  const popularSeries = movies?.popularSeries;
  const upcomingMovies = movies?.upcomingMovies;
  const topRated = movies?.topRatedMovies;

  return (
    <div className="bg-black ">
      <div className="-mt-64 relative z-50">
        <MovieContainer type={"Trending Movies"} movieList={nowPlaying} />
        <MovieContainer type={"Top Rated Movies"} movieList={topRated} />
        <MovieContainer type={"Popular Series"} movieList={popularSeries} />
        <MovieContainer type={"Upcoming Movies"} movieList={upcomingMovies} />
        <MovieContainer type={"Popular Movies"} movieList={popularMovies} />
      </div>
    </div>
  );
};

export default MovieListContainer;
