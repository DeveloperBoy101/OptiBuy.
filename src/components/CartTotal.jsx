import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from "./Title";
const CartTotal = () => {
  const {getCartAmount,currency,deleivery_fee} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-3xl'>
        <Title text1={"Cart"} text2={"Amount"} />
      </div>
      <div className='flex flex-col gap-2 text-sm mt-2'>
        <div className='flex justify-between'>
          <p>SubTotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{deleivery_fee}.00</p>
        </div>    
        <hr/>
        <div className='flex justify-between'>
          <b>Total : </b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deleivery_fee}.00</b>

        </div>
      </div>
    </div>
  );
}

export default CartTotal;
