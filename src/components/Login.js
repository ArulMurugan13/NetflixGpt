import React, { useRef, useState } from "react";
import { bgImage } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [isSignIn , setisSignIn] = useState(true);
    const [errorMsg , seterrorMsg] = useState(null);

    const handleSignInToggle = ()=>{
        setisSignIn(!isSignIn);
    }

    const userName = useRef(null);
    const userEmail = useRef(null);
    const userPassword = useRef(null);

   // validating mail and password
    const handleButtonClick = () => {
      const message = checkValidData(userEmail.current.value,userPassword.current.value);
      seterrorMsg(message);

      if(message !== null)
      {
        return;
      }
      
      if(!isSignIn)
      {
        // for sign Up
        createUserWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName:userName.current.value,
              photoURL: "",
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
                navigate("/browse");
              })
              .catch((error) => {
              });
            console.log(user);
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMsg(errorMessage);
          });


      }
      else{
        // for sign in

        signInWithEmailAndPassword(
          auth,
          userEmail.current.value,
          userPassword.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMsg(errorMessage)
          });

      }

    };
  
  return (
    <div className="">
      <Header />

      {/* Background image */}
      <div className=" ">
        <img
          className="absolute"
          alt="Bg-Image"
          src={bgImage}
        />
      </div>

      {/* sign Up form */}
      <form
        className="absolute w-4/12  bg-black p-12 my-24 mx-auto left-0 right-0 rounded  opacity-85"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl mb-4  text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="w-full rounded my-4  p-2 bg-gray-900 text-white"
          />
        )}

        <input
          ref={userEmail}
          type="email"
          placeholder="Email"
          className="w-full rounded my-4  p-2 bg-gray-900 text-white"
        />
        <input
          ref={userPassword}
          type="password"
          placeholder="Password"
          className="w-full rounded my-4  p-2 bg-gray-900 text-white"
        />
        <button
          className="bg-red-700 rounded text-white w-full p-2 my-6"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-red-600 py-2">{errorMsg}</p>
        <p className="text-white">
          {isSignIn ? "Already a user ? " : "New To Netflix ? "}
          <span
            className="cursor-pointer  hover:text-red-700"
            onClick={handleSignInToggle}
          >
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
