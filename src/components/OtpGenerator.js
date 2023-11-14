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
  const [showWarning, setShowWarning] = useState(false);

  const { email, type, organization, subject } = useSelector(
    (state) => state.auth
  );

  const handleInputChange = (e) => {
    setShowWarning(false);
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
      default:
        console.log("wrong name type ");
        break;
    }
  };

  const handleGenerateOTP = async () => {
    console.log(email, type, organization, subject);
    if (!email || !type || !organization || !subject) {
      setShowWarning(true);
    } else {
      setSetLoading(true);
      await dispatch(generateOTP(email, type, organization, subject));
      setSetLoading(false);
    }
  };

  return (
    <div className="flex font-poppins flex-col lg:flex-row justify-center align-middle text-white items-center w-[100vw] h-[100vh] bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="mb-10 font-poppins lg:mb-0 lg:mr-40 flex justify-center align-middle items-center flex-col">
        <img src="./assests/otp.svg" className="w-96 h-auto" alt="otp" />
        <p className="text-[5px] text-right text-gray-400 italic">
          Free OTP security Illustration By Twiri
        </p>
      </div>
      <div className="flex flex-col mx-2 lg:mx-0 p-6 lg:p-8 rounded-lg outline outline-white outline-1">
        <h2 className="font-bold mb-8 text-center text-3xl">
          Generate One Time Password{" "}
        </h2>
        <div className="flex flex-row mb-2">
          <label htmlFor="email" className="mr-[65px]">
            Email
          </label>
          <input
            className="outline outline-gray-400 outline-1 rounded-lg bg-transparent px-2"
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-row mb-2">
          <label htmlFor="email" className="mr-2">
            Organization
          </label>
          <input
            className="outline outline-gray-400 outline-1 rounded-lg bg-transparent px-2"
            type="text"
            value={organization}
            name="organization"
            onChange={handleInputChange}
            placeholder="Enter organization"
          />
        </div>
        <div className="flex flex-row mb-2">
          <label htmlFor="email" className="mr-12">
            Subject
          </label>
          <input
            className="outline outline-gray-400 outline-1 rounded-lg bg-transparent px-2"
            type="text"
            value={subject}
            name="subject"
            onChange={handleInputChange}
            placeholder="Enter Subject"
          />
        </div>
        <div className=" flex flex-col">
          <p className=" text-xl my-2">Choose type of OTP</p>
          <label>
            <input
              className="mr-1"
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
              className="mr-1"
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
              className="mr-1"
              type="radio"
              value="alphanumeric"
              checked={type === "alphanumeric"}
              onChange={handleInputChange}
              name="type"
            />
            Alphanumeric
          </label>
          {setLoading ? (
            <img
              src="../assests/Spin.svg"
              className="h-12 text-center"
              alt="Generating"
            />
          ) : (
            <button
              onClick={handleGenerateOTP}
              className="mt-4 font-extrabold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Generate OTP
            </button>
          )}
          {showWarning && (
            <p className=" text-red-500">All fields are required</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpGenerator;
