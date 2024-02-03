import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";

// CartItem component displays details of a product in the shopping cart
export const CartItem: React.FC<any> = (props) => {
  // Accessing shopping cart-related functions and state from the context
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="w-72 max-w-xs mx-auto mb-4 bg-gray-200 rounded-md overflow-hidden lg:max-w-md">
      {/* Product image */}
      <img
        src={props.obj["thumbnail"]}
        alt=""
        className="w-full h-36 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          {/* Product title */}
          <p className="text-base font-bold mb-2">{props.obj["title"]}</p>
          {/* Product price */}
          <p className="text-sm">Price: ${props.obj["price"]}</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Remove from Cart button */}
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => removeFromCart(props.obj["id"])}
          >
            Remove
          </button>
          <div className="countHandler flex items-center">
            {/* Decrease quantity button */}
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded"
              onClick={() => removeFromCart(props.obj["id"])}
            >
              -
            </button>
            {/* Quantity input */}
            <input
              className="w-10 text-center"
              value={cartItems[props.obj["id"]]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), props.obj["id"])
              }
            />
            {/* Increase quantity button */}
            <button
              className="px-2 py-1 bg-green-500 text-white rounded"
              onClick={() => addToCart(props.obj["id"])}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
