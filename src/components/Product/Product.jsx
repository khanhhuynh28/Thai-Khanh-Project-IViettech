import './style.scss';
import { productApp } from '../../const/product.const';

function Product() {
    return (
        <div className="container-product_item">
            <div>
                <a href="">
                    <img className="image" src={productApp.srcImage} alt={productApp.srcImage} />
                </a>
            </div>
            <div className="name">
                <p>{productApp.name}</p>
            </div>
            <div className="price">
                <p>{productApp.price}</p>
            </div>
            <div className="status">
                <p>{productApp.status}</p>
            </div>
            <div className="btn-buy">
                <button>
                    <p>Buy Now</p>
                </button>
                <button>
                    <p>Trả góp 0%</p>
                </button>
            </div>
        </div>
    );
}

export default Product;
