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
      </div>
    </div>
  );
}
export default Home;
