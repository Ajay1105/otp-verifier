// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import otpReducer from '../reducers/otpSlice';
import authSlice from '../reducers/authSlice';

const store = configureStore({
  reducer: {
    otp: otpReducer,
    auth: authSlice
  },
});

export default store;
