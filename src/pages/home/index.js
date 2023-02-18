import Carousel from '../../components/navigation/Carousel';
import { NavBar } from '../../components/navigation/NavBar';
import Product from '../../components/Product/Product';
// import Shop from "../../components/shop/Shop";
import './style.scss';
function Home() {
    return (
        <div className="container-home">
            <div className="home">
                <Carousel />
                <NavBar />
                {/* <Shop /> */}
                {/* <Manage /> */}
                {/* <PersonalPage /> */}
                <div className="container-product">
                    <div className="main-product">
                        <p className="newsfeed">Tin mới đăng</p>
                        <div className="product-list">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
