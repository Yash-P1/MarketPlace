import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useAxios } from "../../services/useAxios";
import { useNavigate } from "react-router-dom";

export interface IitemProps {
  // brand: string;
  // category: string;
  // description: string;
  // discountPercentage: number;
  // id: number;
  // images: string[];
  // price: number;
  // rating: number;
  // stock: number;
  // thumbnail: string;
  // title: string;
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  rating: number;
  category: object;
}

export const Cart: React.FC = () => {
  const [loading, data, error] = useAxios<IitemProps>({
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/products?limit=10&offset=0",
  });

  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  // Filter items based on count greater than 0
  const cartItemsToDisplay = data["products"].filter(
    (product) => cartItems[product["id"]] > 0
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Cart Items
          </h1>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Mapping through filtered cart items and rendering CartItem component */}
          {/* {cartItemsToDisplay.map((product) => (
            <CartItem key={product.id} obj={product} />
          ))} */}
        </div>
        {/* Continue Shopping button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
