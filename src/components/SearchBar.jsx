import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();
  useEffect(() => {
    //console.log(location.pathname);
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 flex justify-center items-center">
      <div className="flex items-center justify-center gap-6 border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full sm:w-1/2 ">
        <img src={assets.search_icon} className="w-4" alt="" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />

        <img
          src={assets.cross_icon}
          className="inline w-3 cursor-pointer "
          onClick={() => setShowSearch(false)}
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
