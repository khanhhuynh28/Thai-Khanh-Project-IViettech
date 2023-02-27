import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const response = await axios.get(`http://localhost:3050/api/products/${id}`)
      .then((res) => {
        setProductDetail(res.data, {
          ...productDetail
        })
      })
    return response;
  }
  useEffect(() => {
    fetchData()
  }, []);

  const check = Object.keys(productDetail).length === 0;

  return (
    <>
      {check === false &&
        <div className="container" >
          <div className="card">
            < div className="product-detail">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img className="main-image" src={productDetail.srcImage} /></div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{productDetail.title}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <p className="product-description">{productDetail.shortDecription}</p>
                  <h4 className="price">Giá bán: <span> {productDetail.price} VND</span></h4>
                  <div className="product-category all-detail">
                    <p className="detail">Loại:</p>
                    <div className="category information">{productDetail.category}</div>
                  </div>
                  <div className="all-detail">
                    <p className="detail">Trạng thái:</p>
                    <div className="information">{productDetail.status}</div>
                  </div>

                  {/* <div className="counter">
                    <div className="title-count">Số lượng:</div>
                    <div className="count"> <Counter /></div>
                  </div> */}
                  <div className="action">
                    <Link to={`/cart/${productDetail.id}`}>  <button className="add-to-cart btn btn-default" type="button">Mua Ngay</button></Link>
                    <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      }
    </>
  )
}
