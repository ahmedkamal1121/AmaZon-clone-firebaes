import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GloableContext";
import { getTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";
import "./Subtotl.css";

export default function Subtotal() {
  const { basket } = useAuth();
  const nav = useNavigate();
  return (
    <div className="subtotl">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              All items ({basket.length} items ) <strong>{value}</strong>{" "}
            </p>
            <small>
              <input type="checkbox" />
              Agree all Condections
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button onClick={() => nav("/payment")} className="btn">
        Go to payment
      </button>
    </div>
  );
}
