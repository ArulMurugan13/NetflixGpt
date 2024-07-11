import React from 'react'
import { POSTER_API } from '../utils/constant'

const MovieCard = ( {path}) => {
  return (
    <div className="w-52 hover:ease-in-out hover: transform hover:scale-90 transition duration-400">
      <img className="w-52 h-72 rounded" alt="poster" src={POSTER_API + path} />
    </div>
  );
}

export default MovieCard