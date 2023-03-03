import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import mapStateToProps from "../shopping-cart/ShoppingCart"
export function Order(props) {
  const userId = useSelector((state) => state.auth.user);

  console.log(mapStateToProps.state)
  return (
    <div className="container-order">
      <div className="product-order">
        <div className="address">
          <div className="title-id">
            <img src="https://cdn.pixabay.com/photo/2016/11/28/06/09/map-1864379_960_720.png" alt="" width={25} />
            <h5 className="title">Địa Chỉ Nhận Hàng</h5>
          </div>
          {userId ? (<div className="username">
            <p className="user">{`${userId.nickname}(+84)${userId.phone}`}</p>
            <p className="id">{userId.id}</p>
          </div>) : <div className="username">
            <p className="user">name</p>
            <p className="id">id</p>
          </div>
          }
        </div>
        <div className="order">
          <div className="title">
            <p className="order-title">Sản Phẩm</p>
            <div className="title-right">
              <span className="title-quantity">Số lượng</span>
              <span className="title-into-money">Thành tiền</span>
            </div>
          </div>
          {/* {mapStateToProps.map((item, index) => { */}
          <div className="describe">
            <div className="image"><img src="https://i1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g" alt="" width={60} /></div>
            <div className="product-title">galaxy </div>
            <div className="quantity group">
              <p>1</p>
            </div>
            <div className="into-money group">
              <p>₫200</p>
            </div>
          </div>
          {/* })} */}

        </div>

        <div className="total-payment">
          <div className="payment">
            <span className="payment-left">Phương thức thanh toán</span>
            <span className="payment-right">Thanh toán khi nhận hàng</span>
          </div>
          <div className="total-detail-payment">
            <div className="detail-payment">
              <div className="detail-payment-group">
                <span className="total-money">Tổng tiền hàng:</span>
                <p className="money">3000</p>
              </div>
              <div className="detail-payment-group">
                <span className="total-money">Phí vận chuyển:</span>
                <p className="money">15000</p>
              </div>
              <div className="detail-payment-group">
                <span className="total-money">Tổng thanh toán:</span>
                <p className="money total">5000</p>
              </div>
              <div className="order-detail">
                <button className="order-now">Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

