import React from "react";
import Carousel from "../../components/navigation/Carousel";
import { NavBar } from "../../components/navigation/NavBar";
import Shop from "../../components/shop/Shop";
import "./style.scss";
function Home() {
  return (
    <div className="containerHome">
      <div className="home">
        <Carousel />
        <NavBar />
        <Shop />
        {/* <Manage /> */}
        {/* <PersonalPage /> */}
      </div>
    </div>
  );
}
export default Home;
