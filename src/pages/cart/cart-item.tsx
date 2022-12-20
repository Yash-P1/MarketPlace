import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem: React.FC<any> = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  //console.log("cartItems ID: ", props.obj['id']);

  return (
    <div className="cartItem">
      <img src={props.obj["thumbnail"]} />
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
