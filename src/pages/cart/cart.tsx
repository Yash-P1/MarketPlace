import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useAxios } from "../../components/fetcher/useAxios";
//import { useState, useEffect } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

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

export const Cart: React.FC = () => {
  const [loading, data, error, request] = useAxios<IitemProps>({
    method: "GET",
    url: "https://dummyjson.com/products?limit=10",
  });

  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  // const [data, setData] = useState<itemProps[]>([]);

  // const fetchData = () => {
  //   fetch(`https://dummyjson.com/products?limit=10`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       //console.log(actualData);
  //       setData(actualData.products);
  //       //console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.log("Cart: ", data);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        <div className="products">
          {data["products"].map((product) => {
            // return cartItems[product['id']]
            if (cartItems[product["id"]] !== 0) {
              return <CartItem obj={product} />;
            }
          })}
        </div>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
      </div>
    </div>
  );
};
