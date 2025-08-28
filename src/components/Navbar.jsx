import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch,getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 prata-regular">
      <Link to="/" className="flex gap-1">
        <img src={assets.Logo} className="w-10" />
        <span className="prata-regular text-xl mt-1">OptiBuy.</span>
      </Link>

      <ul className="hidden sm:flex gap-8 text-gray-700 text-sm pt-3">
        {[
          { name: "Home", link: "/" },
          { name: "Collection", link: "/collection" },
          { name: "About", link: "/about" },
          { name: "Contact", link: "/contact" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="flex flex-col items-center gap-1 relative group"
          >
            <p>{item.name}</p>
            <span className="absolute bottom-0 h-[1.5px] bg-[#053052] transition-all duration-200 w-0 left-1/2 group-hover:w-full group-hover:left-0" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to='/signup'>
            <img
              src={assets.profile_icon}
              className="cursor-pointer w-5"
              alt=""
            />
          </Link>
          {/* <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-xs text-gray-500 rounded shadow">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div> */}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-xl text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Side bar menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0 w-1/2" : "translate-x-full w-1/2"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.cross_icon}
              alt=""
              className="h-4 rotate-180 cursor-pointer"
            />
          </div>

          {[
            { name: "Home", link: "/" },
            { name: "Collection", link: "/collection" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              to={item.link}
              className="py-6 pl-6 border-b"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
