import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GloableContext";
import { auth } from "../firebase";
import logo from "../images/header-logo.png";
import shop from "../images/icons/shopping-cart.png";
import serch from "../images/icons/searchIcon.png";
export default function Header() {
  const { user, basket } = useAuth();
  const handelAuth = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">
          <img src={logo} />
        </div>
      </Link>
      <div className="header-serch d-flex">
        <input type="text" placeholder="Search" />
        <img src={serch} className="ser" />
      </div>
      <div className="options">
        <div className="auth">
          <Link to={!user && "/login"}>
            <div className="options-two" onClick={handelAuth}>
              <h6>
                Hello,
                <span>{user ? user.email : "Guest"}</span>
              </h6>
              <span className="sign"> {user ? "Sign out" : "Sign in"}</span>
            </div>
          </Link>
        </div>
        <div className="basket">
          <Link to={"/cheakout"}>
            <img src={shop} />
            <span>{basket?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
