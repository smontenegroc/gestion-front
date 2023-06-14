import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './tokenSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store
