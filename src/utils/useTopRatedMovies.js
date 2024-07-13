import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "./movieSlice";


const useTopRatedMovies = () => {

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getTopRatedMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();
   

    //updating the  store
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    if(!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
