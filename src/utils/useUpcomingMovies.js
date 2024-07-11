import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "./movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getUpcomingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();
    console.log(json);

    //updating the  store
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
