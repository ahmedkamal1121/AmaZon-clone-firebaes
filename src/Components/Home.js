import React from "react";
import "./Home.css";
import home from "../images/home.jpg";
import Product from "./Product";
import shortid from "shortid";
import pro1 from "../images/products/1.png";
import pro2 from "../images/products/2.png";
import pro3 from "../images/products/3.png";
import pro4 from "../images/products/4.png";
import pro5 from "../images/products/5.png";
import pro6 from "../images/products/6.png";
import pro7 from "../images/products/work1.jpg";
import pro8 from "../images/products/work5.jpg";

export default function Home() {
  return (
    <div>
      <img src={home} className="home-img" />
      <div className="cont">
        <div className="row">
          <Product
            id={shortid.generate()}
            img={pro1}
            price={20.55}
            title="Head Phone ZM"
            rating={3}
          />
          <Product
            id={shortid.generate()}
            img={pro2}
            price={240.65}
            title="Lap Top Hp"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            img={pro3}
            price={340.5}
            title="Printer"
            rating={3}
          />
          <Product
            id={shortid.generate()}
            img={pro4}
            price={199.9}
            title="VR "
            rating={2}
          />
          <Product
            id={shortid.generate()}
            img={pro5}
            price={40.8}
            title="INTE"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            img={pro6}
            price={69}
            title="Phone"
            rating={4}
          />
          <Product
            id={shortid.generate()}
            img={pro7}
            price={70.8}
            title="Whatch"
            rating={4}
          />
          <Product
            id={shortid.generate()}
            img={pro8}
            price={69}
            title="Cmaera"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
