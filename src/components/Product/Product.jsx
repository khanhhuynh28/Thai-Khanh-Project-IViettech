import './style.scss';
import { productApp } from '../../const/product.const';
import img from "../../assets/images/can-ho.jpg"

function Product() {
    return (
        <>
            <div className="container-product_item">
                <div>
                    <a href="">
                        <img className="image" src={productApp.srcImage} alt={productApp.srcImage} />
                    </a>
                </div>
                <div>
                    <p className="name">{productApp.name}</p>
                </div>
                <div>
                    <p className="price">{productApp.price}</p>
                </div>
                <div>
                    <h2 className="status">{productApp.status}</h2>
                </div>
                <div>
                    <button>Buy Now</button>
                    <button>Trả góp 0%</button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
}

export default Product;
