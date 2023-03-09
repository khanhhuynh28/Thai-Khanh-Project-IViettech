import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { postCartItemAction } from "../../../stores/action/cartItem.action";
import { appRoute } from "../../../const/routes.const";
import { deleteProduct } from "../../../stores/action/cart.action";

function ShoppingCart(props) {
  const userId = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(props.cart.map(() => 1));




  const handleDecrease = (index) => {
    if (itemCount[index] > 1) {
      const newCount = [...itemCount];
      newCount[index] -= 1;
      setItemCount(newCount);
    }
  };

  const handleIncrease = (index) => {
    const newCount = [...itemCount];
    newCount[index] += 1;
    setItemCount(newCount);
  };



  const total = props.cart.reduce((item, product, index) => {
    const price = product.price * itemCount[index];
    return item + price;
  }, 0);

  const totalPayment = total + 35000


  const handleChange = () => {
    dispatch(postCartItemAction({
      items: props.cart.map((item, index) => {
        return {
          id: item.id,
          srcImage: item.srcImage,
          status: item.status,
          title: item.title,
          price: item.price,
          quantity: itemCount[index],
        };
      }),
      total: total,
      totalPayment: totalPayment
    }));

  };

  return (
    <>
      {userId ? (
        <div className="container-product-cart">
          <div className="container-product">
            <div className="product-cart">
              <div className="title-product">
                <Link to={appRoute.shoppingCart}> <h3 className="title ">Giỏ Hàng</h3></Link>
                <Link to={appRoute.order}> <h5 className=" order">Đơn Hàng</h5></Link>
              </div>
              <>
                {props.cart.map((product, index) => (
                  <div key={index} className="container-cart">
                    <div className="cart" >
                      <div className="cart-image">
                        <img src={product.srcImage} alt="" />
                      </div>
                      <div className="cart-title">
                        <p>{product.title}</p>
                      </div>
                      <div className="cart-counter">
                        <div className="counter">
                          <button className="action-btn btn-minus" onClick={() => handleDecrease(index)}>
                            -
                          </button>
                          <div className="counter-number">{itemCount[index]}</div>
                          <button className="action-btn btn-plus" onClick={() => handleIncrease(index)}>
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-price">
                        <p>₫{`${product.price.toLocaleString()}x${itemCount[index]}`}</p>
                      </div>
                      <div className="delete-cart">
                        <button onClick={() => dispatch(deleteProduct(product.id))}>Xóa</button>
                      </div>
                    </div>
                  </div >
                ))}
              </>
            </div>
            <div className="total-payment">
              <div className="total-detail-payment">
                <div className="detail-payment">

                  <div className="detail-payment-group">
                    <span className="total-money">Tổng thanh toán:</span>
                    <p className="money total">₫{totalPayment.toLocaleString()}</p>
                  </div>
                  <div className="order-detail">
                    <Link to={appRoute.cartItem}><button onClick={handleChange} className="order-now" >Đặt Hàng</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <Navigate to={appRoute.login} />}
    </>


  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);