import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import tvShowsReducer from "./tvShowsSlice";
import watchLaterReducer from "./watchLaterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    shows: tvShowsReducer,
    watchLater: watchLaterReducer,
  },
});

export default store;
