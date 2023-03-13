import "./style.scss";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";
import { useState } from "react";
import { orderAction } from "../../../stores/action/order.action";
function CartItem() {
  const cartItem = useSelector(state => state.cartItem.cartItem);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    username: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChangeUserInfo = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const { username, address, phone, email } = userInfo;

  const handleChangeOrder = () => {
    dispatch(
      orderAction({
        username: username,
        address: address,
        phone: phone,
        email: email,
        product: cartItem.map((item) => {
          return {
            total: item.total,
            totalPayment: item.totalPayment,
            items: item.items.map((product) => {
              return {
                title: product.title,
                price: product.price,
              }
            })
          };
        })
      })
    );
  };
  return (
    <div className="container-cart-item">
      <div className="cart-item">
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <p className="mb-1">Shopping cart</p>
                        </div>
                        {cartItem.map((item, index) => (
                          <div key={index} >
                            {item.items.map((product) => (
                              <MDBCard key={product} className="mb-3">

                                <MDBCardBody >

                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">

                                      <div>
                                        <MDBCardImage
                                          src={product.srcImage}
                                          fluid className="rounded-3" style={{ width: "65px" }}
                                          alt="Shopping item" />
                                      </div>
                                      <div className="ms-3">
                                        <MDBTypography tag="h5">
                                          {product.title}
                                        </MDBTypography>
                                        <p className="small mb-0">{product.status}</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                      <div style={{ width: "50px" }}>
                                        <MDBTypography tag="h5" className="fw-normal mb-0">
                                          {product.quantity}
                                        </MDBTypography>
                                      </div>
                                      <div style={{ width: "80px" }}>
                                        <MDBTypography tag="h5" className="mb-0" style={{ fontSize: "14px", color: "red" }}>
                                          ₫{product.price.toLocaleString()}
                                        </MDBTypography>
                                      </div>

                                    </div>
                                  </div>
                                </MDBCardBody>

                              </MDBCard>
                            ))}
                          </div>

                        ))}
                      </MDBCol>

                      <MDBCol lg="5">
                        <MDBCard className=" text-white rounded-3" style={{ background: "#ff8800" }}>
                          <MDBCardBody>
                            <p className="small">Thông tin khách hàng</p>

                            <form className="mt-4" >
                              <MDBInput className="mb-4" label="Họ và tên" type="text" size="lg"
                                placeholder="Họ và tên" contrast name="username" onChange={handleChangeUserInfo} />

                              <MDBInput className="mb-4" label="Địa chỉ" type="text" size="lg"
                                placeholder="Địa chỉ" contrast name="address" onChange={handleChangeUserInfo} />

                              <MDBRow className="mb-4">
                                <MDBCol md="6">
                                  <MDBInput className="mb-4" label="Số điện thoại" type="text" size="lg"
                                    minLength="13" maxLength="13" placeholder="Số điện thoại" contrast name="phone" onChange={handleChangeUserInfo} />
                                </MDBCol>
                                <MDBCol md="6">
                                  <MDBInput className="mb-4" label="Email" type="text" size="lg"
                                    placeholder="Email" contrast name="email" onChange={handleChangeUserInfo} />
                                </MDBCol>
                              </MDBRow>
                            </form>
                            <hr />
                            {cartItem.map((i) => (
                              <div key={i}>
                                <div className="d-flex justify-content-between">
                                  <p className="mb-2">Tổng tiền hàng</p>
                                  <p className="mb-2">₫{i.total.toLocaleString()}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                  <p className="mb-2">Phí vận chuyển</p>
                                  <p className="mb-2">₫35.000</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                  <p className="mb-2">Tổng thanh toán</p>
                                  <p className="mb-2">₫{i.totalPayment.toLocaleString()}</p>
                                </div>

                                <Link to={appRoute.order}> <MDBBtn onClick={handleChangeOrder} style={{ background: "#ffba00" }} block size="lg">
                                  <div className="d-flex justify-content-between">
                                    <span>
                                      Mua Ngay
                                    </span>
                                  </div>
                                </MDBBtn>
                                </Link>
                              </div>
                            ))}

                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  )
}

export default (CartItem)