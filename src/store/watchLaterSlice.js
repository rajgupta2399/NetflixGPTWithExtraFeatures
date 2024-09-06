import { createSlice } from "@reduxjs/toolkit";

const watchLater = createSlice({
  name: "watchLater",
  initialState: {
    item: [],
  },
  reducers: {
    addWatchToLater: (state, action) => {
      state.item.push(action.payload);
      console.log(state.item.push(action.payload));
    },
  },
});

export const { addWatchToLater } = watchLater.actions;

export default watchLater.reducer;
