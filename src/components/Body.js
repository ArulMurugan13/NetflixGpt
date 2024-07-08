import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        
      }
    });
  }, []);

  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default Body;
