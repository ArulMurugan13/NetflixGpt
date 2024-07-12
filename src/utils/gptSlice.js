import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchGptMovies: null,
    searchMoviesNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addsearchGptMovies: (state , action) => {
        const {movieNames , movieResults} = action.payload;
      state.searchGptMovies =movieResults;
      state.searchMoviesNames = movieNames;
    },
  },
});

export const { toggleGptSearch, addsearchGptMovies } = gptSlice.actions;
export default gptSlice.reducer;