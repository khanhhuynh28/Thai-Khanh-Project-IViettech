import './style.scss';
import { useSelector } from 'react-redux';

function Product() {
    const productList = useSelector((state) => state.product.product);

    console.log(productList);
    return (
        <div className="product-list">
            {productList.map((item, index) => {
                return (
                    <div className="container-product_item" key={index}>
                        <div className="image">
                            <a href="">
                                <img
                                    className="image-item"
                                    src={item.srcImage}
                                    alt={item.srcImage}
                                />
                            </a>
                        </div>
                        <div className="name">
                            <p>{item.title}</p>
                        </div>
                        <div className="price">
                            <p>{item.price}</p>
                        </div>
                        <div className="status">
                            <p>{item.status}</p>
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
            })}
        </div>
    );
}

export default Product;
