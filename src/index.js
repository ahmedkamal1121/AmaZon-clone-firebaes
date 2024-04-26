import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GloableProvider from "./context/GloableContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GloableProvider>
        <App />
      </GloableProvider>
    </BrowserRouter>
  </React.StrictMode>
);
