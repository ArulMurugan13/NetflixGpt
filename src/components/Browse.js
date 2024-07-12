import React from 'react'
import Header from './Header'
import BrowseMainContainer from './BrowseMainContainer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import MovieListContsiner from './MovieListContainer';
import Footer from '../components/Footer'
import usePopularMovies from '../utils/usePopularMovies';
import useTopRatedMovies from '../utils/useTopRatedMovies';
import useUpcomingMovies from '../utils/useUpcomingMovies';
import usePopularSeries from '../utils/usePopularSeries';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

     const showSearch = useSelector((store) => store.gpt.showGptSearch);

     useNowPlayingMovies();
     usePopularMovies();
     useTopRatedMovies();
     useUpcomingMovies();
     usePopularSeries();


  return (
    <div>
      <Header />
      {showSearch ? (
        <GptSearch />
      ) : (
        <>
          <BrowseMainContainer />
          <MovieListContsiner />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Browse