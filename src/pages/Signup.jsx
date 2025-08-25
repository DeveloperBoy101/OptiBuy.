import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Signup = () => {
  return (
    <div className="w-full max-w-md mb-10 mt-10 mx-auto flex flex-col justify-center py-8 px-6 sm:px-12 text-gray-700 ">
      <div className="mb-8 text-center text-3xl">
        <Title text1="Sign" text2="Up" />
        <p className="mt-2 text-gray-600 text-xs prata-regular">
          Create an account to get started
        </p>
      </div>

      <form className="flex flex-col gap-4 w-full">
        {/* First & Last Name */}
        <div className="flex gap-3">
          <div className="flex-1 flex flex-col">
            <label className="text-gray-700 text-xs mb-1">First Name*</label>
            <input
              type="text"
              required
              className="w-full p-2 h-10 rounded-full border border-gray-300 outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-gray-700 text-xs mb-1">Last Name*</label>
            <input
              type="text"
              required
              className="w-full p-2 h-10 rounded-full border border-gray-300 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs mb-1">Email*</label>
          <input
            type="email"
            required
            className="p-2 h-10 rounded-full border border-gray-300 outline-none w-full"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs mb-1">Password*</label>
          <input
            type="password"
            required
            className="p-2 h-10 rounded-full border border-gray-300 outline-none w-full"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs mb-1">Confirm Password*</label>
          <input
            type="password"
            required
            className="px-3 h-10 rounded-full border border-gray-300 outline-none w-full"
          />
        </div>

        {/* Privacy Policy */}
        <div className="flex items-center gap-2 text-xs">
          <input type="checkbox" required className="w-4 h-4 cursor-pointer" />
          <span>
            I accept all{" "}
            <Link to="/privacy-policy">
              <span className="hover:text-blue-600 hover:underline text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
          </span>
        </div>

        <p className="text-xs">
          Already have an account?{" "}
          <Link to="/login">
            <span className="hover:text-blue-600 hover:underline italic text-blue-600 cursor-pointer">
              Log In
            </span>
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 bg-[#053052] text-white hover:bg-[#ece4a9] hover:text-black rounded-full border border-gray-300 prata-regular text-xs transition-colors w-full h-10"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
