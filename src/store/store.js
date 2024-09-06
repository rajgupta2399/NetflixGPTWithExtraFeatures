import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import tvShowsReducer from "./tvShowsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    shows: tvShowsReducer,
  },
});

export default store;
