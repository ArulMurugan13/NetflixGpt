import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import gptSlice from "../utils/gptSlice";

const appStore = configureStore({
    reducer:{
        user : userReducer,
        movies : movieReducer,
        gpt : gptSlice,
    }
})

export default appStore;