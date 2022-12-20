import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../../App.css"

export const CartItem: React.FC<any> = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={props.obj["thumbnail"]} alt="" />
      <div className="description">
        <p>
          <b>{props.obj["title"]}</b>
        </p>
        <p> Price: ${props.obj["price"]}</p>
        {/* <button onClick={() => removeFromCart(props.obj["id"])}>remove</button> */}
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.obj["id"])}> - </button>
          <input
            value={cartItems[props.obj["id"]]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), props.obj["id"])}
          />
          <button onClick={() => addToCart(props.obj["id"])}> + </button>
        </div>
      </div>
    </div>
  );
};
