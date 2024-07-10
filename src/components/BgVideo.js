import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';


const BgVideo = ({movieId}) => {

  useMovieTrailer(movieId);
  const trailerData = useSelector(store => store?.movies?.movieTrailer)

  return (
    <div className="w-full">
      <iframe
        className=" w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerData?.key +
          "?&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=" +
          trailerData?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default BgVideo;