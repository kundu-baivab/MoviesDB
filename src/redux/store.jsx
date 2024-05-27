// import {configureStore} from '@reduxjs/toolkit'
// import moviesReducer from './slices/movies'

// export const store = configureStore({
//     reducer:{
//         movies : moviesReducer
//     },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import moviesReducer from "./slices/movies";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
});

export const persistor = persistStore(store);
