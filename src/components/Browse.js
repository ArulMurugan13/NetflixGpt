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

const Browse = () => {

     useNowPlayingMovies();
     usePopularMovies();
     useTopRatedMovies();
     useUpcomingMovies();
     usePopularSeries();


  return (
    <div>
      <Header/>
      <BrowseMainContainer/>
      <MovieListContsiner/>
      <Footer/>
    </div>
  )
}

export default Browse