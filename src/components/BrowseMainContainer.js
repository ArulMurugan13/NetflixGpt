import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import BgVideo from './BgVideo'
import { OPTION_API } from '../utils/constant'

const BrowseMainContainer = () => {

    const [movieList , setmovieList] = useState(null);

const getNowPlayingVideos = async ()=>{
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const data = await fetch(url , OPTION_API);

    const json = await data.json();
    setmovieList(json);
    console.log(json);

}

useEffect(()=>{
    getNowPlayingVideos();
},[])

    if(!movieList) return;

    const movieTitle = movieList?.results[0]?.original_title;
    const overview = movieList?.results[0]?.overview;
  return (
    <div>
      <VideoTitle title={movieTitle} overview={overview} />
      <BgVideo />
    </div>
  );
}

export default BrowseMainContainer