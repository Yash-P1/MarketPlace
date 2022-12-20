import { FC, useContext, useState, useRef } from "react";
//import { itemProps } from "./shop";
import { ShopContext } from "../../context/shop-context";
import StarRating from "./starRating";

export const Product: FC<any> = (props) => {
  //const [showMore, setShowMore] = useState(false);
  //console.log(props.obj);
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.obj["id"]];

  // function handleMoreClick() {
  //   setShowMore(!showMore);
  // }

  return (
    <div>
      <div className="product">
        <img src={props.obj["thumbnail"]} />
        <div className="description">
          <p>
            <b>{props.obj["title"]}</b>
          </p>
          <p> ${props.obj["price"]}</p>
        </div>
        {/* <>
          <button onClick={handleMoreClick}>
            {showMore ? "Hide" : "Show"} details
          </button>
          {showMore && <p>In cart</p>}
        </> */}
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
