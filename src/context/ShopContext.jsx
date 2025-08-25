// import { createContext } from "react";
// import { products } from "../assets/assets";
// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '$';
//     const deleivery_fee = 10;

//     const value = {
//         products,currency,deleivery_fee
//     }
//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;

// import { createContext, useState } from "react";
// import { products } from "../assets/assets";
// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const deleivery_fee = 10;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);

//   const value = {
//     products,
//     currency,
//     deleivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,  };
//   return (
//     <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

//Bhai yeah jitna bhi code ha woh hum nay simple bustuk currency products search r show searck liye he bnaya haoka

import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deleivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  //usenavigate to direct placeorder
  const navigate = useNavigate();
  {
    /* Add to cart Logic */
  }
  const addToCart = async (itemId, size) => {
    //For selection of size toast
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    //for getting exact cart data :
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  //for getting cart count :
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  //Get total amount of the cart :
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let iteminfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            totalAmount += iteminfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  ///useEffect(() => {
  ///  console.log(cartItems);
  ///}, [cartItems]);

  //Delete Cart Function & update the input quantity :
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  //
  const value = {
    products,
    currency,
    deleivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
