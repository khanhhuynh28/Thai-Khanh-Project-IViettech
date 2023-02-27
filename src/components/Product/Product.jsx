import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProductList } from '../../stores/action/product.action';

function Product() {
    const productList = useSelector((state) => state.product.product);
    const navigate = useNavigate();

    return (
        <div className="product-list">
            {productList.map((item, index) => {
                return (
                    <div className="container-product_item" key={index}>
                        <div className="image">
                            {/* <a href=""> */}
                            <img
                                className="image-item"
                                src={item.srcImage}
                                alt={item.srcImage}
                            />
                            {/* </a> */}
                        </div>
                        <div className="name">
                            <p>{item.title}</p>
                        </div>
                        <div className="price">
                            <p>{item.price} đ</p>
                        </div>
                        <div className="status">
                            <p>{item.status}</p>
                        </div>
                        <div className="btn-buy">
                            {/* <Navigate to={`/product/${item.id}`}> */}
                            <button onClick={() => { navigate(`/product/${item.id}`) }}>
                                <p>Buy Now</p>
                            </button>
                            {/* </Navigate> */}
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
