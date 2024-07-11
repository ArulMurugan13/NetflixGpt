import React from 'react'
import Netflix_Logo from '../Images/Netflix_Logo.png'
import userLogo from "../Images/userLogo.jpg";
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import signout from '../Images/signout.png'


const Header = () => {
    // const NetflixLogoURL = process.env.PUBLIC_URL + "/Netflix_Logo.png";

    const navigate = useNavigate();
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

  return (
    <div className="absolute w-full z-50 flex  px-12 items-center  justify-between  bg-gradient-to-b from-black">
      <div>
        <img
          className="ml-12 w-[7.5rem] h-[3.5rem]"
          alt="logo"
          src={Netflix_Logo}
        />
      </div>
      {user && (
        <div className="flex items-center">
          <img src={userLogo} alt="user logo" className="w-6 h-6 rounded-l" />
          <p className="bg-gray-600 px-[8px] rounded-r text-white">
            {user.displayName}
          </p>
          <button
            className=" flex items-center gap-2 bg-red-600 px-[5px] rounded text-white ml-10"
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