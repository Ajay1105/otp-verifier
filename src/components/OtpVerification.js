import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "../reducers/otpSlice";

const OtpVerification = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const { email } = useSelector((state) => state.auth);
  const verificationStatus = useSelector(
    (state) => state.otp.verificationStatus
  );

  const handleVerifyOTP = () => {
    if (userInput === "") {
      setShowWarning(true);
    } else {
      dispatch(verifyOTP(email, userInput));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center align-middle text-white items-center w-[100vw] h-[100vh] bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="mb-10 lg:mb-0 lg:mr-40">
        <img src="./assests/otp.svg" className="w-96 h-auto" alt="otp" />
        <p className="text-[5px] text-right text-gray-400 italic">
          Free OTP security Illustration By Twiri
        </p>
      </div>
      <div className="flex flex-col mx-2 lg:mx-0 p-6 lg:p-8 rounded-lg outline outline-white outline-1">
        <h2 className="font-bold mb-8 text-center text-3xl">
          Generate One Time Password{" "}
        </h2>
        <div className="flex flex-row">
          <label htmlFor="email" className="mr-4">
            OTP:
          </label>
          <input
            className="outline outline-gray-400 outline-1 rounded-lg bg-transparent px-2"
            type="text"
            value={userInput}
            onChange={(e) =>{
              setShowWarning(false);
              setUserInput(e.target.value)}
            } 
            placeholder="Enter OTP"
          />
        </div>
        <button
          className="mt-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleVerifyOTP}
        >
          Verify OTP
        </button>
        {verificationStatus && <p className=" text-lime-500">Verification Status: {verificationStatus}</p>}
        {showWarning && <p className=" text-red-500">You must enter OTP first</p>}
      </div>
    </div>
  );
};

export default OtpVerification;
