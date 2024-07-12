import React from "react";
import { bgImage } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";


const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img className="h-screen w-screen" alt="Bg-Image" src={bgImage} />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
      {/* Background image */}
    </div>
  );
};

export default GptSearch;
