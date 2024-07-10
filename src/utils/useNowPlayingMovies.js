import { useEffect } from "react";
import { OPTION_API } from "./constant";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "./movieSlice";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    //fetching now playing movies from TMDB
    const getNowPlayingVideos = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

      const data = await fetch(url, OPTION_API);

      const json = await data.json();
     
      //updating the  store
      dispatch(addnowPlayingMovies(json?.results));
    };

    useEffect(() => {
      getNowPlayingVideos();
    }, []);
}

export default useNowPlayingMovies;