import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [showCPassword, setShowCPassword] = useState(false);

  const toggleCPasswordVisibility = () => {
    setShowCPassword((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-center flex-col space-y-6 w-full ">
      <div className="bg-transparent flex items-center justify-center text-2xl font-bold text-white md:text-3xl">
        SignUp
      </div>
      <div className="bg-secondary-color w-[75%] p-5 text-white font-semibold flex flex-col items-center justify-center space-y-4 rounded-lg md:w-[60%] md:p-7 lg:w-[40%]">
        <div className="w-full flex flex-col justify-center items-start space-y-2 md:space-y-3 md:text-lg">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="bg-primary-color outline-none rounded-md p-2 font-normal w-full md:p-3"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-2 md:space-y-3 md:text-lg">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="bg-primary-color outline-none rounded-md p-2 font-normal w-full md:p-3"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-2 md:space-y-3 md:text-lg relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="bg-primary-color outline-none rounded-md p-2 font-normal w-full md:p-3"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-9 text-white md:top-12 md:right-4"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-2 md:space-y-3 md:text-lg relative">
          <label htmlFor="">Confirm Password</label>
          <input
            type={showCPassword ? "text" : "password"}
            className="bg-primary-color outline-none rounded-md p-2 font-normal w-full md:p-3"
          />
          <button
            type="button"
            onClick={toggleCPasswordVisibility}
            className="absolute right-2 top-9 text-white md:top-12 md:right-4"
          >
            {showCPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="p-2 bg-yellow-500 text-white font-bold rounded-lg md:p-3 md:text-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
