import React, { useState } from "react";
import { bgImage } from "../utils/constant";
import Header from "./Header";
import Divider from "../Shared/Divider";
import Footer from "./Footer";

const Login = () => {

    const [isSignIn , setisSignIn] = useState(true);
    const handleSignInToggle = ()=>{
        setisSignIn(!isSignIn);
    }
  
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img className="w-screen h-screen" alt="Bg-Image" src={bgImage} />
      </div>

      <form className="absolute w-4/12  bg-black p-12 my-24 mx-auto left-0 right-0 rounded  opacity-85">
        <h1 className="font-bold text-2xl mb-4  text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignIn &&
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded my-4  p-2 bg-gray-900 text-white"
          />
        }

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded my-4  p-2 bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded my-4  p-2 bg-gray-900 text-white"
        />
        <button className="bg-red-700 rounded text-white w-full p-2 my-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

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
      <Divider />
      <Footer />
    </div>
  );
};

export default Login;
