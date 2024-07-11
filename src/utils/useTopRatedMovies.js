import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "./movieSlice";


const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getTopRatedMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();
    console.log(json);

    //updating the  store
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
