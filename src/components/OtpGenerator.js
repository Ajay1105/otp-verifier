import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateOTP } from "../reducers/otpSlice";
import {
  setEmail,
  setType,
  setOrganization,
  setSubject,
} from "../reducers/authSlice";

const OtpGenerator = () => {
  const dispatch = useDispatch();

  const [setLoading, setSetLoading] = useState(false);

  const generatedOTP = useSelector((state) => state.otp.generatedOTP);
  const { email, type, organization, subject } = useSelector(
    (state) => state.auth
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        dispatch(setEmail(value));
        break;
      case "type":
        dispatch(setType(value));
        break;
      case "organization":
        dispatch(setOrganization(value));
        break;
      case "subject":
        dispatch(setSubject(value));
        break;
    }
  };

  const handleGenerateOTP = async () => {
    setSetLoading(true);
    console.log(email, type, organization, subject);
    if (!email || !type || !organization || !subject) {
        alert("All fields are required");
    } else {
        await dispatch(generateOTP(email, type, organization, subject));
        setSetLoading(false);
    }
};

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={handleInputChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="organization"
        onChange={handleInputChange}
        placeholder="Enter organization"
      />
      <input
        type="text"
        name="subject"
        onChange={handleInputChange}
        placeholder="Enter Subject"
      />
      <label>
        <input
          type="radio"
          value="numeric"
          checked={type === "numeric"}
          onChange={handleInputChange}
          name="type"
        />
        Numeric
      </label>
      <label>
        <input
          type="radio"
          value="alphabet"
          checked={type === "alphabet"}
          onChange={handleInputChange}
          name="type"
        />
        Alphabet
      </label>
      <label>
        <input
          type="radio"
          value="alphanumeric"
          checked={type === "alphanumeric"}
          onChange={handleInputChange}
          name="type"
        />
        Alphanumeric
      </label>
      <button onClick={handleGenerateOTP}>{setLoading? "...":"" }  Generate OTP</button>
      {generatedOTP && <p>Generated OTP: {generatedOTP}</p>}
    </div>
  );
};

export default OtpGenerator;
