import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 min-h-[80vh] ">
      <div className="text-2xl mb-6">
        <Title text1={"My"} text2={"ORDERS"} />
      </div>
      <div className="space-y-4">
        {products.slice(10, 14).map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            {/* Left Part */}
            <div className="flex items-start gap-4 text-sm">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-contain "
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-800">
                  {item.name}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600 text-sm">
                  <p className="font-medium text-gray-900">
                    {currency}
                    {item.price}
                  </p>
                  <p>Qty: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Purchase Date:{" "}
                  <span className="font-medium text-gray-600">
                    24 Aug, 2025
                  </span>
                </p>
              </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto justify-between">
              <div className="flex items-center sm:justify-center gap-2 ">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <p className="text-sm text-gray-700">Ready To Ship</p>
              </div>
              <button className="bg-gray-100 text-gray-700 px-5 py-2 text-sm border">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
