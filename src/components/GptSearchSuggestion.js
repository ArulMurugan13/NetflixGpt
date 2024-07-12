import React from 'react'
import { useSelector } from 'react-redux'
import MovieContainer from './MovieContainer';

const GptSearchSuggestion = () => {
  const { searchMoviesNames, searchGptMovies } = useSelector(
    (store) => store.gpt
  );
  if (!searchMoviesNames) return null;



  return (
    <div className='p-4 m-4 bg-black text-white opacity-85 rounded'>
      <div>
        {
          searchMoviesNames.map((movieName,index)=>{
           return  <MovieContainer
              key={movieName}
              type={movieName}
              movieList={searchGptMovies[index]}
            />;
           })
        }
        {/* <MovieContainer type={searchMoviesNames[0]} movieList={searchGptMovies[0]}/>
        <MovieContainer type={searchMoviesNames[1]} movieList={searchGptMovies[1]}/>
        <MovieContainer type={searchMoviesNames[2]} movieList={searchGptMovies[2]}/>
        <MovieContainer type={searchMoviesNames[3]} movieList={searchGptMovies[3]}/> */}
      </div>

    </div>
  )
}

export default GptSearchSuggestion