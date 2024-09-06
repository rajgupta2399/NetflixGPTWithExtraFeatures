import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "shows",
  initialState: {
    arrivingToday: null,
    onTheAir: null,
    popular: null,
    topRated: null,
  },
  reducers: {
    addArrivingToday: (state, action) => {
      state.arrivingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});
export const { addArrivingToday, addOnTheAir, addPopular, addTopRated } =
  tvShowSlice.actions;
export default tvShowSlice.reducer;
