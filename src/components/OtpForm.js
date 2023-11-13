import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateOTP, verifyOTP } from "../reducers/otpSlice";
import OtpGenerator from "./OtpGenerator.js";
import OtpVerification from "./OtpVerification.js";

const OtpForm = () => {
  const { email, type, organization, subject } = useSelector(
    (state) => state.auth
  );
  const generatedOTP = useSelector((state) => state.otp.generatedOTP);
  const isDataEntered = ()=>{
    if (email && type && organization && subject && generatedOTP) {
      return true;
    } else {
      return false;
    }
  }



  const dispatch = useDispatch();
  const verificationStatus = useSelector(
    (state) => state.otp.verificationStatus
  );

  const [data, setData] = useState({
    email: "",
    type: "",
    organization: "",
    subject: "",
  });
  const [userInput, setUserInput] = useState("");

  const areAllFieldsFilled = () => {
    for (const key in data) {
      if (data[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleGenerateOTP = (email, type) => {
    dispatch(generateOTP(email, type));
  };

  const handleVerifyOTP = () => {
    if (userInput === "") {
      alert("Enter OTP");
    } else {
      dispatch(verifyOTP(data.email, userInput));
    }
  };

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      {isDataEntered() ?  <OtpVerification/> : <OtpGenerator />}
      {/*<button
        onClick={() => {
          if (areAllFieldsFilled()) {
            handleGenerateOTP(data);
          } else {
            alert("All fields are required");
          }
        }}
      >
        Generate OTP
      </button>
      <button
        onClick={() => {
          if (areAllFieldsFilled()) {
            console.log(data);
          } else {
            alert("All fields are required");
          }
        }}
      >
        see Data
      </button>
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="organization"
        value={data.organization}
        onChange={handleChange}
        placeholder="Enter Organization"
      />
      <input
        type="text"
        name="subject"
        value={data.subject}
        onChange={handleChange}
        placeholder="Enter Subject"
      />
      <hr />

      <label>
        <input
          type="radio"
          value="numeric"
          checked={data.type === "numeric"}
          onChange={handleChange}
          name="type"
        />
        Numeric
      </label>
      <label>
        <input
          type="radio"
          value="alphabet"
          checked={data.type === "alphabet"}
          onChange={handleChange}
          name="type"
        />
        Alphabet
      </label>
      <label>
        <input
          type="radio"
          value="alphanumeric"
          checked={data.type === "alphanumeric"}
          onChange={handleChange}
          name="type"
        />
        Alphanumeric
      </label>

      <hr />

      {generatedOTP && <p>Generated OTP: {generatedOTP}</p>}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      {verificationStatus && <p>Verification Status: {verificationStatus}</p>}*/}
    </div>
  );
};

export default OtpForm;
