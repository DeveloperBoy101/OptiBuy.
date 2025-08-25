import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { assets } from "../assets/assets";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms before submitting!");
      return;
    }
    alert(`Email submitted: ${email}`);
    setEmail("");
    setAgreed(false);
  };

  return (
    <div className="bg-[#E0E7F5]  flex flex-col sm:flex-row justify-between p-8 mb-5">
      {/* LEFT PART */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <Link to="/" className="flex flex-row gap-3">
          <img src={assets.Logo} alt="Logo" className="lg:w-16 w-12" />
          <span className="prata-regular text-xl lg:text-4xl mt-2">
            OptiBuy.
          </span>
        </Link>

        <div className=" flex flex-col gap-2 prata-regular w-20 sm:ml-3">
          <NavLink
            to="/"
            className="hover:translate-x-1 transition-all duration-200 text-xs"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:translate-x-1 transition-all duration-200 text-xs"
          >
            About
          </NavLink>
          <NavLink
            to="/collection"
            className="hover:translate-x-1 transition-all duration-200 text-xs"
          >
            Collection
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:translate-x-1 transition-all duration-200 text-xs"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex flex-row gap-3 text-xl mt-4  sm:ml-3">
          <FaFacebook className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 transition-colors duration-200 cursor-pointer" />
          <IoLogoTiktok className="hover:text-black transition-colors duration-200 cursor-pointer" />
        </div>
      </div>

      {/* RIGHT PART */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2 mt-6 sm:mt-0">
        <p className="text-lg font-bold prata-regular">
          Stay Connected With Us
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="email" className="prata-regular text-sm">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email :)"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              WebkitAppearance: "none",
              WebkitBoxShadow: "none",
              WebkitColumnRuleColor: "Black",
            }}
            className="p-2 border border-black/30 outline-none bg-[#E0E7F5] text-gray-500"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="prata-regular text-[10px] tracking-wide">
              Agree to terms
            </span>
          </div>
          <button
            className={`p-2  text-white  text-xs prata-regular ${
              agreed ? "bg-[#053052]" : "bg-gray-400 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!agreed}
          >
            Submit
          </button>
        </form>
        <p className="text-[10px] mt-auto">
          © 2035 by T. McGregor. Powered and secured ahmadraza.bablo@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
