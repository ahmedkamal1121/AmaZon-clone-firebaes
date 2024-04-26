import React from "react";
import cheakout from "../images/checkoutAd.jpg";
import "./CheakOut.css";
import CheakOutProduct from "./CheakOutProduct";
import { useAuth } from "../context/GloableContext";
import Subtotal from "./Subtotal";

export default function CheakOut() {
  const { basket } = useAuth();

  return (
    <div className="d-flex">
      <div className="cheakout-left">
        <img src={cheakout} className="oo" />
        <h3>Hello, Gust</h3>
        <h2>Your Basket</h2>
        <hr />
        <div className="basket-product">
          {basket.length != 0 ? (
            basket.map((item) => (
              <CheakOutProduct
                id={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            ))
          ) : (
            <h1>NO Product Yet</h1>
          )}
        </div>
      </div>
      <div className="cheakout-right">
        <Subtotal />
      </div>
    </div>
  );
}
