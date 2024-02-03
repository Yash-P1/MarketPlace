import { createContext, useState } from "react";

// Create a context to manage shopping cart state and related functions
export const ShopContext = createContext<any>(null);

// ShopContextProvider is a component that provides shopping cart functionality to its children
export const ShopContextProvider: React.FC<any> = (props) => {
  // Helper function to generate a default cart with initial quantities set to zero
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 11; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  // State to track the items in the cart and their quantities
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Context value containing cart items and related functions
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
  };

  // Provide the context value to its children using ShopContext.Provider
  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};
