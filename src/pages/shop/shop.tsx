import React from "react";
import { Product } from "./product";
import "./shop.css";
//import { useState, useEffect } from "react";
import { ShopContextProvider } from "../../context/shop-context";
import { useAxios } from "../../components/fetcher/useAxios";
import { Cart } from "../cart/cart";
//import { CartItem } from "../cart/cart-item";

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
};

export const Shop: React.FC = () => {
  const [loading, data, error, request] = useAxios<IitemProps>({ method: 'GET', url: 'https://dummyjson.com/products?limit=10' });

  if (loading) return <p>Loading ....</p>;

    if (error !== '') return <p>{error}</p>;

    if (!data) return <p>Data was null</p>;

  // const [data, setData] = useState<itemProps[]>([]);

  // const fetchData = () => {
  //   fetch(`https://dummyjson.com/products?limit=10`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       console.log(actualData);
  //       setData(actualData.products);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //console.log("Shop: ", data);

  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>MarketPlace</h1>
        </div>
        <div className="products">
          {data['products'].map((product) => (
            <Product obj={product} />
          ))}
        </div>
        <div>
          <ShopContextProvider obj={data} />
        </div>
        {/* <div>
          <Cart obj={data} />
        </div> */}
        {/* <div>
          <CartItem obj={data} />
        </div> */}
      </div>
    </div>
  );
};
