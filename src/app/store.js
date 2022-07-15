// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//   },
// });


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { loginReducer } from "../redux/reducer/login.reducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers ({ 
    user: loginReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)