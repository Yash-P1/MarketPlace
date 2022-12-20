import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useAxios } from "../../services/useAxios";
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
  const [loading, data, error] = useAxios<IitemProps>({
    method: "GET",
    url: "https://dummyjson.com/products?limit=10",
  });

  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        <div className="products">
          {data["products"].map((product) => {
            if (cartItems[product["id"]] !== 0) {
              return <CartItem obj={product} />;
            } else return null;
          })}
        </div>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
      </div>
    </div>
  );
};
