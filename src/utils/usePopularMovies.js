import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getPopularMovies = async () => {
  
const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=te&page=1&region=India&sort_by=popularity.desc&with_origin_country=IN&with_original_language=ta";
    // const url =
    //   "https://api.themoviedb.org/3/movie/popular?language=hi-IN&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();
    console.log(json);

    //updating the  store
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
