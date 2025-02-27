
import { useSelector } from 'react-redux';
import BgVideo from './BgVideo'
import VideoTitle from './VideoTitle';


const BrowseMainContainer = () => {
        
    const movies = useSelector((store )=> store?.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[2];
    const {original_title,overview ,id} = mainMovie;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
      />
      <BgVideo  movieId={id}/>
    </div>
  );
}

export default BrowseMainContainer