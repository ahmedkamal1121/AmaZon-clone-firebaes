import React from "react";
import star from "../images/icons/star.png";
import { useAuth } from "../context/GloableContext";

export default function CheakOutProduct({ title, rating, price, id, img }) {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="ch-product">
      <div>
        <img src={img} width={"170px"} />
      </div>
      <div className="pro-info">
        <h3>{title}</h3>

        <strong>
          {price} <small>$</small>
        </strong>
        <div className="rait">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img width="20px" height="20px" src={star} />
            ))}
        </div>
        <button onClick={removeFromBasket} className="btn">
          Remove Frome Basket
        </button>
      </div>
    </div>
  );
}
