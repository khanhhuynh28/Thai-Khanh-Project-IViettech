import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./style.scss";
import { Link } from "react-router-dom";
import { appRoute } from "../../../../const/routes.const";
import axios from "axios";
import Counter from "../counter/Counter";

export function ShoppingCart() {
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

  const removeProduct = (title) => {
    const newProductDetail = productDetail.filter((product) => product.title != title);
    setProductDetail(newProductDetail);
  }

  return (
    <div className="container-cart">
      {productDetail.map((cart) => (
        <div className="cart" key={cart.id}>
          <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="h-100 py-5">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="text-black">
                      <MDBRow>
                        <MDBCol lg="7" className="px-5 py-4">
                          <MDBTypography
                            tag="h3"
                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                          >
                            Sản phẩm
                          </MDBTypography>

                          <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src={cart.thumbnail}
                                fluid
                                style={{ width: "150px" }}
                                alt="Generic placeholder image"
                              />
                            </div>

                            <div className="flex-grow-1 ms-3">
                              <a className="float-end text-black">
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography tag="h5" className="text-primary">
                                {cart.title}
                              </MDBTypography>
                              <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                Color: white
                              </MDBTypography>

                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">{cart.price} VND</p>

                                <Counter />
                              </div>
                            </div>
                          </div>

                          {/* <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                                fluid
                                style={{ width: "150px" }}
                                alt="Generic placeholder image"
                              />
                            </div>

                            <div className="flex-grow-1 ms-3">
                              <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography tag="h5" className="text-primary">
                                Headphones Bose 35 II
                              </MDBTypography>
                              <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                Color: red
                              </MDBTypography>

                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">239$</p>

                                <div className="def-number-input number-input safari_only">
                                  <button className="minus"></button>
                                  <input
                                    className="quantity fw-bold text-black"
                                    min={0}
                                    defaultValue={1}
                                    type="number"
                                  />
                                  <button className="plus"></button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                fluid
                                style={{ width: "150px" }}
                                alt="Generic placeholder image"
                              />
                            </div>

                            <div className="flex-grow-1 ms-3">
                              <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography tag="h5" className="text-primary">
                                iPad 9.7 6-gen WiFi 32GB
                              </MDBTypography>
                              <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                Color: rose pink
                              </MDBTypography>

                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">659$</p>

                                <div className="def-number-input number-input safari_only">
                                  <button className="minus"></button>
                                  <input
                                    className="quantity fw-bold text-black"
                                    min={0}
                                    defaultValue={2}
                                    type="number"
                                  />
                                  <button className="plus"></button>
                                </div>
                              </div>
                            </div>
                          </div> */}

                          <hr
                            className="mb-4"
                            style={{
                              height: "2px",
                              backgroundColor: "#ff8800",
                              opacity: 1,
                            }}
                          />
                          <div className="d-flex justify-content-between px-x">
                            <p className="fw-bold">Giảm giá:</p>
                            <p className="fw-bold">15.000 VND</p>
                          </div>
                          <div className="d-flex justify-content-between px-x">
                            <p className="fw-bold">Phí chuyển hàng:</p>
                            <p className="fw-bold"> 25.000 VND</p>
                          </div>
                          <div
                            className="d-flex justify-content-between p-2 mb-2"
                            style={{ backgroundColor: "#e1f5fe" }}
                          >
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              Tổng:
                            </MDBTypography>
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              {cart.price + 25000 + 15000} VND
                            </MDBTypography>
                          </div>
                        </MDBCol>
                        <MDBCol lg="5" className="px-5 py-4">
                          <MDBTypography
                            tag="h3"
                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                          >
                            Thanh toán
                          </MDBTypography>

                          <form className="mb-5" style={{ fontSize: "14px" }}>
                            <MDBInput
                              className="mb-5"
                              label="Họ và tên"
                              type="text"
                              size="lg"

                            />
                            <MDBInput
                              className="mb-5"
                              label="Địa chỉ"
                              type="text"
                              size="lg"
                            />
                            <MDBRow>

                              <MDBCol className="mb-5">
                                <MDBInput
                                  className="mb-4"
                                  label="Số điện thoại"
                                  type="number"
                                  size="lg"
                                  minLength="20"
                                  maxLength="20"
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBBtn block size="lg" style={{ background: "#ff8800" }}>
                              Mua Ngay
                            </MDBBtn>

                            <MDBTypography
                              tag="h5"
                              className="fw-bold mb-5"
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              <a href="#!">
                                <Link to={appRoute.productDetail}>
                                  <MDBIcon fas icon="angle-left me-2" />
                                  Trở về
                                </Link>
                              </a>
                            </MDBTypography>
                          </form>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      ))
      }
    </div >
  );
}