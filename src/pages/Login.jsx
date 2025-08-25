import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="sm:w-1/2  mb-10 mt-10  mx-auto  flex flex-col justify-center py-8 sm:py-0 px-4 sm:px-12 lg:px-20 text-gray-700 s">
      <div className="mb-5 prata-regular text-center text-3xl mt-3">
        <Title text1={"Log"} text2={"In"} />
        <p className=" text-gray-600 text-xs">
          Please Login To Access our Page
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full mb-10">
        {/* First & Last Name */}

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs mb-1">Email*</label>
          <input
            type="email"
            required
            className="p-2 border h-8 rounded-full border-gray-300 outline-none w-full"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs mb-1">Password</label>
          <input
            type="Password"
            className="p-2 border h-8 rounded-full border-gray-300 outline-none w-full"
          />
        </div>

        <p className="text-xs">
          If you are not Log In then please{" "}
          <Link to="/signup">
            <span className="hover:text-blue-600 cursor-pointer hover:underline italic text-blue-600">
              Sign-Up{" "}
            </span>{" "}
          </Link>
          this account
        </p>
        {/* Submit Button */}
        <Link to='/'>
          <button
            type="submit"
            className="bg-[#053052] text-white hover:bg-[#ece4a9] rounded-full hover:text-black border border-gray-300 prata-regular text-xs transition-colors w-full h-8"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
