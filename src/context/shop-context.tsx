import { createContext, useEffect, useState } from "react";
// import { Cart } from "../pages/cart/cart";

// export type cartActions = {
//   cartItems?: {};
//   addToCart?: (itemId: any) => void;
//   updateCartItemCount?: (newAmount: any, itemId: any) => void;
//   removeFromCart?: (itemId: any) => void;
//   getTotalCartAmount?: () => number;
//   checkout?: () => void;
// };

export const ShopContext = createContext<any>(null);

// export const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider: React.FC<any> = (props) => {
  // console.log("Shopcontext:::", props.obj);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 11; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = props.obj.find((product) => product.id === Number(item));
  //       totalAmount += cartItems[item] * itemInfo.price;
  //     }
  //   }
  //   return totalAmount;
  // };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // const checkout = () => {
  //   setCartItems(getDefaultCart());
  // };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    // getTotalCartAmount,
    // checkout,
  };

  //console.log(cartItems);

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
      {/* <Cart obj={props.obj}/> */}
    </div>
  );
};
