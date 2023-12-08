import { createSlice } from "@reduxjs/toolkit";

export const categoriesReducer = createSlice({
  name: "categories",
  initialState: "All",
  reducers: {
    changeCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeCategory } = categoriesReducer.actions;
export default categoriesReducer.reducer;
