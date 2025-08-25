import React from "react";
import { assets } from "../assets/assets";
import Missions from "../components/Missions";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <div className=" flex flex-col sm:flex-row lg:flex-row border border-gray-400 mb-10 lg:h-[450px] ">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center py-8 sm:py-0 px-4 sm:px-12 lg:px-20  text-black">
          <div className=" text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <p className="w-6 sm:w-8 md:w-11 h-[2px] bg-gray-800"></p>
              <p className="font-medium text-xs sm:text-sm md:text-base">
                Discover Unique
              </p>
            </div>
            <h1 className="prata-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-relaxed mt-2 sm:mt-3">
              Kids' Fashion
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                Online
              </p>
              <p className="w-6 sm:w-8 md:w-11 h-[2px] bg-gray-800"></p>
            </div>
          </div>
        </div>

        {/* Hero Right Side */}
        <div className="w-full  sm:w-1/2  flex justify-center items-center">
          <img
            src={assets.aboutimg}
            className="w-full h-auto sm:h-full object-cover"
            alt="Hero Banner"
          />
        </div>
      </div>
      <Missions />
      <Team/>
    </>
  );
};

export default About;
