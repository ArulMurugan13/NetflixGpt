import React from 'react'
import more_info_icon from '../Images/more_info_icon.png'
import play_icon from "../Images/play_icon.png";

const VideoTitle = ({title ,overview}) => {
  return (
    <div className="absolute w-full aspect-video bg-gradient-to-r from-gray-950 text-white ">
      <div className="ml-9  pt-[20%]">
        <h1 className="font-bold text-6xl text-white mb-8">
            {title}
        </h1>
        <p className="font-medium  w-1/3 text-sm mb-4">{overview}</p>
      </div>
      <div className="flex items-center gap-4 ml-24 mt-4">
        <button className="flex items-center gap-2 py-2 px-5 bg-white rounded text-black font-medium text-xl">
          <img className="w-6 h-6" alt="play" src={play_icon} />
          Play
        </button>
        <button className="flex items-center gap-2 py-2 px-3 bg-gray-600 rounded text-white  text-xl">
          <img className="w-6 h-6" alt="more info" src={more_info_icon} />
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle