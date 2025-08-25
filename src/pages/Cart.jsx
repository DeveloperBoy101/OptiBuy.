import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { AiOutlineDelete } from "react-icons/ai";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="prata-regular text-3xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      <div>
        {cartData.map((item, idx) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={idx}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-16"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-sm sm:text-xs font-medium mb-2">
                    {productData.name}
                  </p>
                  <div className="text-sm sm:text-xs flex  gap-5 font-medium  mb-6 sm:mb-8">
                    <p className="mt-1.5">
                      {currency}
                      {productData.price * item.quantity}
                    </p>
                    <p className="text-center sm:px-3 sm:py-1 border  bg-slate-50 w-[40px]">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="qty" className="text-sm sm:text-xs">
                  Qty:
                </label>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  max={10}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                  id="qty"
                  defaultValue={item.quantity}
                />
              </div>
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt=""
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white  my-8 px-8 py-3 prata-regular text-xs"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
