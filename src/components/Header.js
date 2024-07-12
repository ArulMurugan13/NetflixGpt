import React from 'react'
import Netflix_Logo from '../Images/Netflix_Logo.png'
import userLogo from "../Images/userLogo.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import signout from '../Images/signout.png'
import search_icon from '../Images/search_icon.png'
import home_page from '../Images/home_page.png'
import { toggleGptSearch } from '../utils/gptSlice';


const Header = () => {
    // const NetflixLogoURL = process.env.PUBLIC_URL + "/Netflix_Logo.png";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showSearch = useSelector((store) => store.gpt.showGptSearch);
    
    const user = useSelector(store => store.user)
    const handleSignout = ()=>{
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            navigate("/")
          })
          .catch((error) => {
            // An error happened.
          });
    }

  const handleGptSearchToggle = ()=>{
      dispatch(toggleGptSearch());

  }

  return (
    <div className="absolute w-full z-50 flex pt-3  px-12 items-center  justify-between  bg-gradient-to-b from-black">
      <div>
        <img
          className="ml-12 w-[7.5rem] h-[3.5rem]"
          alt="logo"
          src={Netflix_Logo}
        />
      </div>
      {user && (
        <div className="flex items-center">
          <button
            className=" flex items-center py-1 gap-2 bg-gray-600 px-[5px] rounded text-white mr-10"
            onClick={handleGptSearchToggle}
          >
            {showSearch ? "Home Page" : "GPT Search"}
            <img
              className="w-5 h-5"
              alt="more info"
              src={showSearch ? home_page :search_icon }
            />
          </button>

          <img src={userLogo} alt="user logo" className="w-8 h-8 rounded-l" />
          <p className="bg-gray-600 px-[8px] py-1 rounded-r text-white">
            {user.displayName}
          </p>
          <button
            className=" flex items-center py-1 gap-2 bg-red-600 px-[5px] rounded text-white ml-10"
            onClick={handleSignout}
          >
            Sign Out
            <img className="w-4 h-4" alt="more info" src={signout} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Header