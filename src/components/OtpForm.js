import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateOTP, verifyOTP } from "../reducers/otpSlice";

const OtpForm = () => {
  const dispatch = useDispatch();
  const generatedOTP = useSelector((state) => state.otp.generatedOTP);
  const verificationStatus = useSelector(
    (state) => state.otp.verificationStatus
  );

  const [userInput, setUserInput] = useState("");

  const handleGenerateOTP = (email, type) => {
    dispatch(generateOTP(email, type));
  };

  const handleVerifyOTP = () => {
    dispatch(verifyOTP(userInput));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleGenerateOTP("aky11052003@gmail.com", "numeric");
        }}
      >
        Generate OTP
      </button>
      {generatedOTP && <p>Generated OTP: {generatedOTP}</p>}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      {verificationStatus && <p>Verification Status: {verificationStatus}</p>}
    </div>
  );
};

export default OtpForm;
