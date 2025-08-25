import React from "react";
import { features } from "../assets/assets";
import Title from "./Title";

const OurFeatures = () => {
  return (
    <>
    <div className="text-3xl text-center mb-10">
        <Title
        text1={"OUR"} text2={"FEATURES"}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error laboriosam. Debitis molestias, ea saepe quia quas officiis reiciendis nesciunt.</p>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-48 gap-x-28 gap-y-10 mb-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#ece4a9] p-6 sm:w-[220px] sm:h-[230px] w-full h-[190px] "
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-10 h-16 object-contain mb-3"
            />
            <p className="text-[#053052] text- prata-regular text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurFeatures;
