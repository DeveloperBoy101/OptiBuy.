import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [active,setActive] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-2xl  my-3">
          <Title text1={"DELEIVERY"} text2={"INFO"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="Last name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="First name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1 px-3.5 w-full"
          placeholder="Email Adress"
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1 px-3.5 w-full"
          placeholder="Street #"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="Zip code"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded py-1 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>

      {/* Right Side */}
      <div className="mb-10 sm:ml-10 mt-10">
        <div className="min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setActive('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${active === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-2" />
            </div>
            <div onClick={() => setActive('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${active === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div onClick={() => setActive('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${active === 'cod' ? 'bg-green-400 ' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELEIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-xs prata-regular ">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
