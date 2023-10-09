// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  cart: [],
};

// Create a slice with reducers and actions
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Export actions
export const {
  setCart,
} = appSlice.actions;

// Configure the store
const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
