import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="bg-[#d5e1eb] h-[400px] flex flex-col justify-center items-center text-center gap-4 mb-10">
      <img src={assets.global} alt="Global Offer" className="w-32" />
      <p className="text-xs  text-[#053052]">Don't Miss Out</p>
      <p className="text-4xl prata-regular font-bold text-[#053052]">
        Limited Time Offer
      </p>
      <p className="max-w-md text-[#053052] text-sm">
        Hurry! Shop now to enjoy exclusive discounts on selected items.
      </p>
      <Link to="/collection" className="bg-[#053052] text-white hover:text-[#053052] text-xs px-6 py-2 mt-2 prata-regular transition duration-200 border border-black  hover:bg-[#ece4a9] ">
        Shop Now
      </Link>
    </div>
  );
};

export default Offer;
