import React from 'react'
import Netflix_Logo from '../Images/Netflix_Logo.png'
import userLogo from "../Images/userLogo.jpg";
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


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
          className="ml-12 w-[9.5rem] h-[4.5rem]"
          alt="logo"
          src={Netflix_Logo}
        />
      </div>
      {user && (
        <div className="flex items-center">
          <img src={userLogo} alt="user logo" className="w-6 h-6 rounded-l" />
          <p className="bg-black px-[5px] rounded-r text-white">
            {user.displayName}
          </p>
          <button
            className="bg-red-600 px-[5px] rounded text-white ml-20"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header