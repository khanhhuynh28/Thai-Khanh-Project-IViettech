import React, { useState } from "react";
import "./style.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { postCartItemAction } from "../../../stores/action/cartItem.action";
import { appRoute } from "../../../const/routes.const";
import { deleteProduct } from "../../../stores/action/cart.action";
import cartIsEmpty from "../../../assets/images/cart.webp"

function ShoppingCart(props) {
  const userId = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(props.cart.map(() => 1));
  const cartList = useSelector(state => state.cart.cart)

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
    // props.cart.forEach((product, index) => {
    //   if (itemCount[index] > 0) {
    //     dispatch(deleteProduct(product));
    //   }
    // });
  };


  return (
    <>
      {userId ? (
        <div className="container-product-cart">
          {cartList.length === 0 ? (
            <>
              <div className="cart-is-empty">
                <img className="logo-cart" src={cartIsEmpty} alt="" />
                <div className="buy">
                  <Link to={appRoute.home}><button >Mua Ngay</button></Link>
                </div>
              </div>
            </>
          ) : (
            <div className="container-product">
              <div className="product-cart">
                <div className="title-product">
                  <h5 className="title ">Giỏ Hàng</h5>
                </div>

                <>
                  {cartList.map((product, index) => (
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
                          <button onClick={() => props.deleteProduct(product)}>Xóa</button>
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
                      <span className="total-money">Tổng:</span>
                      <p className="money total">₫{total.toLocaleString()}</p>
                    </div>
                    <div className="order-detail">
                      <Link to={appRoute.cartItem}><button onClick={handleChange} className="order-now" >Đặt Hàng</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          }

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
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);