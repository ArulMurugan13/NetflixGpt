import React, { useRef } from 'react'
// import openaiConfig from '../utils/openaiConfig';
import { OPTION_API } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addsearchGptMovies } from '../utils/gptSlice';



const GptSearchBar = () => {

  const dispatch = useDispatch();
  const gtpSearchText = useRef(null); 

  const searchMovieTmdb = async (movie) =>{
    const url =
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1";

      const data  = await fetch(url, OPTION_API);
      const json = await data.json();
      return json.results;
  }

  const handleGptSearch =  async ()=>{

    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query " +
    //   gtpSearchText.current.value+ " . only give me names of 5 movies only. comma seperated like the example given ahead . Example Result : Leo, Garudan, Guruvayoor Ambalanadayil, The Goat Life, Star.";
    //  const gptResults = await openaiConfig.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const gptResults = ["Kalki 2898 AD","Leo tamil","Indian 2","KGF","Theri"];

    // [promise,promise,promise,promise] - returs an array of promise
    const promiseArray = gptResults.map((movie)=> searchMovieTmdb(movie));
    const tmdbSearchResult = await Promise.all(promiseArray);
    dispatch(addsearchGptMovies({movieNames:gptResults , movieResults:tmdbSearchResult}));
  }

  return (
    <div className="pt-[7%] flex justify-center">
      <form className="bg-black p-3  w-1/2 rounded grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={gtpSearchText}
          type="search"
          className="p-3 col-span-10 mr-4  text-xl font-semibold rounded"
        />
        <button className="bg-red-700 col-span-2 rounded text-white font-bold" onClick={handleGptSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar