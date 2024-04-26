import React from "react";
import "./prodct.css";
import star from "../images/icons/star.png";
import { useAuth } from "../context/GloableContext";

export default function Product({ title, rating, price, id, img }) {
  const { dispatch, basket } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        img: img,
      },
    });
  };

  return (
    <div className="product-card">
      <div className="info">
        <h4>{title}</h4>
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="rait">
        {/* *** */}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <img width="20px" height="20px" src={star} />
          ))}
      </div>
      <img src={img} height={"120px"} width="120px" className="img-pro" />

      <button onClick={addToBasket} className="addyocart">
        Add To Cart
      </button>
    </div>
  );
}
