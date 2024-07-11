import { useDispatch } from "react-redux";
import { OPTION_API } from "./constant";
import { addMovieTrailer } from "./movieSlice";
import { useEffect } from "react";

 const useMovieTrailer = (movieId)=>{
      const dispatch = useDispatch();

      const getMovieVideos = async () => {
        const url =
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
          
        const data = await fetch(url, OPTION_API);
        const json = await data.json();
        const filterData = json?.results?.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData?.length ? filterData[0] : json?.results?.[0];
        dispatch(addMovieTrailer(trailer));

      };

      useEffect(() => {
        getMovieVideos();
      }, []);
 }

 export default useMovieTrailer;