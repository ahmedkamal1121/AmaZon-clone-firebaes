import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../images/login-logo.png";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        nav("/");
      }
    });
  };
  return (
    <div className="box">
      <Link to={"/"}>
        <img src={logo} width="100px" />
      </Link>
      <form>
        <h2>Sign in </h2>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn"> Sing in</button>

        <hr />
        <p className="p-login">
          if you forget password contact support and we will help you in less
          yhan min
        </p>
        <button type="submit" className="btn" onClick={register}>
          Create new acount{" "}
        </button>
      </form>
    </div>
  );
}
