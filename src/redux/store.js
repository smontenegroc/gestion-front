import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export default store
