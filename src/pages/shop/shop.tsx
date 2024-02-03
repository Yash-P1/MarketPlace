import React from "react";
import { Product } from "./product";
import { ShopContextProvider } from "../../context/shop-context";
import { useAxios } from "../../services/useAxios";

export interface IitemProps {
  // Product properties
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

// Shop component displays a list of products
export const Shop: React.FC = () => {
  // Fetching product data using Axios
  const [loading, data, error] = useAxios<IitemProps>({
    method: "GET",
    url: "https://dummyjson.com/products?limit=10",
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Mapping through product data and rendering Product component */}
          {data["products"].map((product) => (
            <Product key={product.id} obj={product} />
          ))}
        </div>
        <div>
          {/* Shop context provider for managing shopping cart state */}
          <ShopContextProvider obj={data} />
        </div>
      </div>
    </div>
  );
};
