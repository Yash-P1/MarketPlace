import { FC, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import StarRating from "./starRating";

// Product component displays individual product details
export const Product: FC<any> = (props) => {
  // Accessing cart-related functions and state from the context
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get the count of the current product in the cart
  const cartItemCount = cartItems[props.obj["id"]];

  return (
    <div className="w-72 max-w-xs mx-auto">
      <div className="bg-gray-200 rounded-md overflow-hidden">
        {/* Product image */}
        <img
          src={props.obj["category"]["image"]}
          alt=""
          className="w-full h-36 object-cover"
        />
        <div className="p-3">
          {/* Product title */}
          <h3 className="text-base font-medium">
            <a href="#" className="text-blue-500">
              {props.obj["title"]}
            </a>
          </h3>
          {/* Product price */}
          <p className="text-gray-700 mt-1">${props.obj["price"]}</p>
          <div className="flex justify-between items-center mt-2">
            {/* Star rating component */}
            <StarRating />
            {/* Add to Cart button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => addToCart(props.obj["id"])}
            >
              Add to Cart
            </button>
            {/* Show "In Cart" message if the product is in the cart */}
            {cartItemCount > 0 && <div className="text-green-500">In Cart</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
