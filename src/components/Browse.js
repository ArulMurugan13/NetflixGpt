import React from 'react'
import Header from './Header'
import BrowseMainContainer from './BrowseMainContainer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies';

const Browse = () => {

     useNowPlayingMovies();


  return (
    <div>
      <Header/>
      {
        /*
          Main container
            - title
            -overview 
            -bg video

          secondary container
            - movie list containers
                  - movie list
        */ 
      }

      <BrowseMainContainer/>
    </div>
  )
}

export default Browse