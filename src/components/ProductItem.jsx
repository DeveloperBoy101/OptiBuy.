import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden ">
          <img
            src={image[0]}
            className="w-full h-64 object-contain hover:scale-105 transition ease-in-out"
            alt=""
          />

          <p className=" ml-3 pt-3 pb-1 text-sm ">{name}</p>
          <p className=" md:ml:3 ml-3  mb-4 text-sm font-medium">
            {currency}
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
