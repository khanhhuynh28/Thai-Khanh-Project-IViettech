import React from "react";
import Carousels from "../../components/navigation/Carousel/Carousel";
import { Vehicle } from "../../components/navigation/Navbar/components/Vehicle";
import { NavBar } from "../../components/navigation/Navbar/NavBar";
import Product from "../../components/Product/Product";
import { ShoppingCart } from "../../components/Product/product-detail/shopping-cart/ShoppingCart";
import "./style.scss";
export function Home() {
  return (
    <div className="containerHome">
      <div className="home">
        <Carousels />
        <NavBar />
        {/* <Vehicle /> */}
        <Product />
      </div>
    </div>
  );
}
