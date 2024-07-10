import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className="absolute w-full aspect-video bg-gradient-to-r from-gray-950 text-white ">
      <div className="ml-9  pt-[20%]">
        <h1 className="font-bold text-4xl mb-8">{title}</h1>
        <p className="font-medium  w-1/3 text-sm mb-4">{overview}</p>
      </div>
      <div className="ml-14 mt-8">
        <button className=" py-1 px-5 bg-white rounded text-black font-medium">
          ▶️ Play
        </button>
        <button className=" ml-2 py-1 px-3 bg-white rounded text-black font-medium">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle