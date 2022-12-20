import React from "react";
import { Product } from "./product";
import { ShopContextProvider } from "../../context/shop-context";
import { useAxios } from "../../services/useAxios";

export interface IitemProps {
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

export const Shop: React.FC = () => {
  const [loading, data, error] = useAxios<IitemProps>({
    method: "GET",
    url: "https://dummyjson.com/products?limit=10",
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>MarketPlace</h1>
        </div>
        <div className="products">
          {data["products"].map((product) => (
            <Product obj={product} />
          ))}
        </div>
        <div>
          <ShopContextProvider obj={data}/>
        </div>
      </div>
    </div>
  );
};
