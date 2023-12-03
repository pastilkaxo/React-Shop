import { configureStore, createSlice } from "@reduxjs/toolkit";

// упрощающая настройку хранилища с настройками по умолчанию.
const initialState = {
  cart: [],
  favorite: [],
  // categories: [],
};




// принимает объект, содержащий редуктор, название части состояния 
// (state slice), начальное значение состояния, и автоматически генерирует
// частичный редуктор с соответствующими создателями и типами операции


const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setFavorite:(state,action) => {
      state.favorite = action.payload;
    }
    
  },
});


// actions
export const {
  setCart,setFavorite
} = appSlice.actions;

// 
const store = configureStore({
  reducer: appSlice.reducer,
});


export default store;

