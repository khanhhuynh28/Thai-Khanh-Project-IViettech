import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";
import Counter from "./counter/Counter";
import { ShoppingCart } from "./shopping-cart/ShoppingCart";
import "./style.scss";

export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [fetching, setFetching] = useState(false);


  const fetchData = () => {
    setFetching(true);
    axios.get("http://localhost:3050/api/product")
      .then((res) => {
        setProductDetail(res.data);
        setFetching(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeProduct = (id) => {
    const newProductDetail = productDetail.filter((product) => product.id != id);
    setProductDetail(newProductDetail);
  }


  return (
    <div className="container">
      <div className="card">
        {productDetail.map((product) => (
          <div key={product.id} className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img className="main-image" src={product.thumbnail} /></div>
                  <div className="tab-pane" id="pic-2"><img src={product.images} /></div>
                  <div className="tab-pane" id="pic-3"><img src={product.srcImage} /></div>
                  <div className="tab-pane" id="pic-4"><img src={product.srcImage} /></div>
                  <div className="tab-pane" id="pic-5"><img src={product.srcImage} /></div>
                </div>
                {/* <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={product.images} /></a></li>
                  <li><a data-target="#pic-2" data-toggle="tab"><img src={product.images} /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src={product.images} /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src={product.images} /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src={product.images} /></a></li>
                </ul> */}

              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 đánh giá</span>
                </div>
                <p className="product-description">{product.description}</p>
                <h4 className="price">Giá bán: <span> {product.price} VND</span></h4>
                <p className="vote"><strong>91%</strong>người mua thích sản phẩm này!  <strong>(87 bình chọn)</strong></p>
                {/* <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5> */}
                <div className="product-size">
                  <div className="row">
                    <div className="col-md-5">
                      <label htmlFor="size" className="sizes">Size</label>
                      <select id="size" name="size" className="form-control">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="discount-percentage all-detail">
                  <p className="detail">Tỷ lệ chiết khấu:</p>
                  <div className="percentage information">{product.discountPercentage}</div>
                </div>
                <div>{product.rating}</div>
                <div>{product.stock}</div>
                <div className="product-brand all-detail">
                  <p className="detail">Thương hiệu:</p>
                  <div className="brand information">
                    {product.brand}</div>
                </div>
                <div className="product-category all-detail">
                  <p className="detail">Loại:</p>
                  <div className="category information">{product.category}</div>
                </div>
                <h5 className="colors">Màu sắc:
                  <span className="color orange" data-toggle="tooltip" title="Not In store"></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5>
                <div className="counter">
                  <div className="title-count">Số lượng:</div>
                  <div className="count"> <Counter /></div>
                </div>
                <div className="action">
                  <Link to={appRoute.shoppingCart}>  <button className="add-to-cart btn btn-default" type="button">Mua Ngay</button></Link>
                  <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}