import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "../reducers/otpSlice";

const OtpVerification = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const { email } = useSelector((state) => state.auth);
  const verificationStatus = useSelector((state) => state.otp.verificationStatus);

  const handleVerifyOTP = () => {
    if (userInput === "") {
      alert("Enter OTP");
    } else {
      dispatch(verifyOTP(email, userInput));
    }
  };

  return (
    <div>
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

export default OtpVerification;
