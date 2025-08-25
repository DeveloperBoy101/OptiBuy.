import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Text Section in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-3xl">
        <div className="text-center sm:text-left">
        <Title text1={"OUR"} text2={"STORY"} />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-gray-500 text-xs tracking-wide leading-5">
            At T. McGregor, we blend minimalistic designs with a touch of
            playfulness to create a unique style for kids. Our collection
            includes a mix of trendy and timeless pieces, ensuring that your
            child stays fashionable and comfortable.
          </p>
          <Link to="/about">
            <button className="w-[6rem] bg-gray-800 hover:bg-[#ece4a9] hover:text-gray-700 transition-all duration-200 rounded-3xl   text-white prata-regular text-[9px]">
              Our Mission
            </button>
          </Link>
        </div>
      </div>

      {/* Image Below Full Width */}
      <img
        src={assets.Headerimg_2}
        alt="About"
        className="sm:h-[300px] h-[170px] mb-10   border border-gray-500"
      />
    </div>
  );
};

export default Story;
