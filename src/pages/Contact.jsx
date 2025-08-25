import React from "react";
import { assets } from "../assets/assets";
import Faq from "../components/Faq";
import Title from "../components/Title";
import Offer from "../components/Offer";

const Contact = () => {
  return (
     <>
    <div className="flex flex-col sm:flex-row lg:flex-row border lg:h-[450px]">
      {/* Left Image */}
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <img
          src={assets.contactimg}
          className="w-full h-auto sm:h-full object-cover"
          alt="Contact Banner"
        />
      </div>

      {/* Right Form */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center py-8 sm:py-0 px-4 sm:px-12 lg:px-20 text-gray-700">
        <div className="mb-10 prata-regular text-center text-3xl">
          <Title text1={"Get In"} text2={"Touch"}/>
          <p className="mb-6 text-gray-600 text-xs">
            Reach out to us for any inquiries or feedback. We're here to assist
            you.
          </p>
        </div>

        <form className="flex flex-col gap-4 w-full">
          {/* First & Last Name */}
          <div className="flex gap-3">
            <div className="flex gap-3 w-full">
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 text-xs mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 h-8 outline-none"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-gray-700 text-xs mb-1">Last Name*</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 h-8 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-xs mb-1">Email*</label>
            <input
              type="email"
              required
              className="p-2 border h-8 border-gray-300 outline-none w-full"
            />
          </div>

          {/* Feedback */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-xs mb-1">
              Short Answer / Feedback
            </label>
            <input
              type="text"
              className="p-2 border h-8 border-gray-300 outline-none w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#053052] text-white hover:bg-[#ece4a9] hover:text-black border border-gray-300 prata-regular text-xs transition-colors w-full h-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Faq/>
    <Offer/>
   </>
  );
};

export default Contact;
