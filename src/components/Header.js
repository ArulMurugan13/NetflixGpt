import React from 'react'
import Netflix_Logo from '../Images/Netflix_Logo.png'

const Header = () => {
    // const NetflixLogoURL = process.env.PUBLIC_URL + "/Netflix_Logo.png";


  return (
    <div className="absolute w-full z-50 flex  px-12 py-6 items-center  justify-between  bg-gradient-to-b from-black">
      <div>
        <img
          className="ml-12 w-[9.5rem] h-[4.5rem]"
          alt="logo"
          src={Netflix_Logo}
        />
      </div>
      {/* <div>
        <button className="bg-red-700 px-[5px] rounded text-white mr-40">Sign In</button>
      </div> */}
    </div>
  );
}

export default Header