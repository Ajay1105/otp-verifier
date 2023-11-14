import { useSelector } from "react-redux";
import OtpGenerator from "./OtpGenerator.js";
import OtpVerification from "./OtpVerification.js";

const OtpForm = () => {
  const { email, type, organization, subject } = useSelector(
    (state) => state.auth
  );
  const generatedOTP = useSelector((state) => state.otp.generatedOTP);
  const isDataEntered = () => {
    if (email && type && organization && subject && generatedOTP) {
      return true;
    } else {
      return false;
    }
  };

   return <div>{isDataEntered() ? <OtpVerification /> : <OtpGenerator />}</div>;
  //  return <OtpVerification/>;
};

export default OtpForm;
