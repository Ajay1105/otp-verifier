import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  generatedOTP: null,
  verificationStatus: "unverified",
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,

  reducers: {
    generateOTPSuccess: (state, action) => {
      state.generatedOTP = action.payload;
    },
    verifyOTPSuccess: (state, action) => {
      state.verificationStatus = action.payload;
    },
  },
});

export const { generateOTPSuccess, verifyOTPSuccess } = otpSlice.actions;

export const generateOTP = (email, type, organization, subject) => async (dispatch) => {
  try {
    const requestBody = {
      email: email,
      type: type,
      organization: organization,
      subject: subject,
    };

    const response = await axios.post(
      "https://otp-service-beta.vercel.app/api/otp/generate",
      requestBody
    );
    dispatch(generateOTPSuccess(response.data.message));
} catch (e) {
    console.log(e);
    dispatch(generateOTPSuccess(e.response.data.error));
  }
};

export const verifyOTP = (email, userInput) => async (dispatch) => {
  try {
    console.log(email, userInput);
    const requestBody = {
      email: email,
      otp: userInput,
    };

    const response = await axios.post(
      "https://otp-service-beta.vercel.app/api/otp/verify",
      requestBody
    );
    dispatch(verifyOTPSuccess(response.data.message));
    console.log(response);
  } catch (e) {
    console.error("Error verifying OTP:", e);
    dispatch(verifyOTPSuccess(e.response.data.error));
  }
};

export default otpSlice.reducer;
