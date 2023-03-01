import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";
import { buyProduct } from "../../../stores/action/cart.action";
import { connect } from 'react-redux';
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
  const { srcImage, title, shortDecription, category, status, price } = productDetail;
  const check = Object.keys(productDetail).length === 0;

  return (
    <>
      {check === false &&
        <div className="container-product-detail" >
          <div className="product-detail">
            <div className="cards">
              < div className="card-product-detail">
                <h4 className="title">Chi tiết sản phẩm</h4>

                <div className="wrapper row">
                  <div className="preview col-md-6">
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1"><img className="main-image" src={srcImage} /></div>
                    </div>
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{title}</h3>
                    <p className="product-description">{shortDecription}</p>
                    <div className="card-detail">
                      <p className="price">Giá bán: <span> ₫{price.toLocaleString()}</span></p>
                      <div className="product-category all-detail">
                        <p className="detail">Loại:</p>
                        <span className="category information">{category}</span>
                      </div>
                      <div className="all-detail">
                        <p className="detail">Trạng thái:</p>
                        <span className="information status">{status}</span>
                      </div>
                      <div className="action">
                        <button className="add-to-cart btn btn-default" >Mua  hàng</button>
                        <button className="like btn btn-default" ><span className="fa fa-heart"></span></button>
                      </div>
                    </div>

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

