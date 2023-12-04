import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER
   } from "redux-persist";
import storage from "redux-persist/lib/storage";


// упрощающая настройку хранилища с настройками по умолчанию.
const initialState = {
  cart: [],
  favorite: [],
  userName:'',
  userEmail:'',
  userPassword:'',
  userAvatar:'default',
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      authorize: (state, action) => {
          state.isAuthorized = true;
          state = {
            ...action.payload,
            avatar: 'default',
        };
      },
      unauthorize: (state) => {
          state.isAuthorized = false;
      },
      setName: (state, action) => {
          if (!state.isAuthorized) return;
          state.userName = action.payload;
      },
      setAvatar: (state, action) => {
          if (!state.isAuthorized) return;
          state.avatar = action.payload;
      },
      setEmail: (state, action) => {
          if (!state.isAuthorized) return;
          state.userEmail = action.payload;
      },
      setPassword: (state, action) => {
          if (!state.isAuthorized) return;
          state.userPassword = action.payload;
      },
  }
});

// c and f slice
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


const rootReducer = combineReducers({
  reducer: appSlice.reducer,
  user: userSlice.reducer,
});



const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)



// actions for cart and favs
export const {
  setCart,setFavorite
} = appSlice.actions;

// actions for users 
export const {
  authorize,
  unauthorize,
  setName,
  setAvatar,
  setEmail,
  setPassword
} = userSlice.actions

// store  
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;

