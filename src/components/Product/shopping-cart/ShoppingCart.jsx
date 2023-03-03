import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { deleteProduct } from "../../../stores/action/cart.action";
import { Link, Navigate } from "react-router-dom";
import { Order } from "../order/Order";
import { appRoute } from "../../../const/routes.const";

function ShoppingCart(props) {
  const [cartItem, setCartItem] = useState([]);
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



  const totals = props.cart.reduce((item, product, index) => {
    const price = product.price * itemCount[index];
    return item + price;
  }, 0);

  useEffect(() => {
    setCartItem({
      itemCount: itemCount,
      totals: totals,

    })
  }, [])
  console.log(cartItem)
  return (

    <div className="container-product-cart">
      <div className="container-product">
        <div className="product-cart">
          <h3 className="title">Đơn hàng</h3>
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
                    <button onClick={() => props.deleteProduct(product)}>Xóa</button>
                  </div>
                </div>
              </div >
            ))}
          </>
        </div>
        <div className="buy">
          <div className="total">Tổng cộng:
            <p>₫{totals.toLocaleString()}</p>
          </div>
          <Link to={{
            pathname: `/order`,
            state: { cartItem: cartItem }
          }}><button className="buy-now">Mua Hàng</button></Link>
        </div>
      </div>
    </div>



  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);