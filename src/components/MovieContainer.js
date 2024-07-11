import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({type,movieList}) => {
  
    if(!movieList) return;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-serif font-medium text-white  mb-4">
        {type}
      </h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-5 ">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieContainer