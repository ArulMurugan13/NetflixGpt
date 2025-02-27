import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "./movieSlice";

const useUpcomingMovies = () => {

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getUpcomingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();

    //updating the  store
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    if(!upcomingMovies)  getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
