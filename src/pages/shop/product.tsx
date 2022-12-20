import { FC, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import StarRating from "./starRating";

export const Product: FC<any> = (props) => {
  
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.obj["id"]];

  return (
    <div>
      <div className="product">
        <img src={props.obj["thumbnail"]} alt="" />
        <div className="description">
          <p>
            <b>{props.obj["title"]}</b>
          </p>
          <p> ${props.obj["price"]}</p>
        </div>
        <StarRating/>
        <button
          className="addToCartBttn"
          onClick={() => addToCart(props.obj["id"])}
        >
          Add to Cart
        </button>
        {cartItemCount > 0 && <div className="element inCart">In Cart</div>}
      </div>
    </div>
  );
};
