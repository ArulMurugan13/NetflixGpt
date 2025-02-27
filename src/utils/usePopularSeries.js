import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import {  addPopularSeries } from "./movieSlice";

const usePopularSeries = () => {
  const popularSeries = useSelector(store => store.movies.popularSeries)
  const dispatch = useDispatch();

  //fetching now playing movies from TMDB
  const getPopularSeries = async () => {
    const url =
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";

    const data = await fetch(url, OPTION_API);

    const json = await data.json();
    
    //updating the  store
    dispatch(addPopularSeries(json?.results));
  };

  useEffect(() => {
    if(!popularSeries) getPopularSeries();
  }, []);
};

export default usePopularSeries;
