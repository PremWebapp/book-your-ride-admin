// import { createStore, applyMiddleware } from "redux";
// import { persistStore } from "redux-persist";
// // import logger from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducer from "./root.reducer";

// const middleware = [thunk];
// // if (process.env.NODE_ENV === "development") {
// //   middleware.push(logger);
// // }

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
// export const persistor = persistStore(store);

// const exportStore = { store, persistor };

// export default exportStore;

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