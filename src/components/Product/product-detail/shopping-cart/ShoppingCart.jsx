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
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

export function ShoppingCart() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState();
  const [cartAPI, setCartAPI] = useState();

  // const { id } = useParams();


  // async function fetchData() {
  //   const response = await axios.get(`http://localhost:3050/api/products/${id}`)
  //     .then((res) => {
  //       setCart(res.data, { ...cart })
  //     })

  //   return response;
  // }
  // useEffect(() => {
  //   fetchData()
  // }, []);


  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price)
    } return
  };

  const handleIncrease = () => {
    setCount(count + 1);
    setPrice(price)

  };

  // const check = Object.keys(cart).length === 0;
  // const newPrice = count * cart.price;
  // console.log(newPrice)

  // useEffect(() => {

  //   if (price) {
  //     setPrice(newPrice, { ...price });

  //   } return
  // }, [count, price]);
  // console.log(count)
  // console.log(cart.price)

  return (
    <>
      <div className="container-cart">
        <div className="cart" >
          <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="h-100 py-5">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="text-black">
                      <MDBRow>
                        <MDBCol lg="" className="px-5 py-4">
                          <MDBTypography
                            tag="h3"
                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                          >
                            Sản phẩm
                          </MDBTypography>

                          <div className="d-flex mb-5">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src={cart.srcImage}
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
                                <p> {cart.title}</p>
                              </MDBTypography>

                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3 price">{cart.price}đ</p>
                              </div>
                              <div className="container-counter">
                                <div className="counter">
                                  <button className="action-btn btn-minus" onClick={() => handleDecrease()}>
                                    -
                                  </button>
                                  <div className="counter-number">{count}</div>
                                  <button className="action-btn btn-plus" onClick={() => handleIncrease()}>
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr
                            className="mb-4"
                            style={{
                              height: "2px",
                              backgroundColor: "#ff8800",
                              opacity: 1,
                            }}
                          />

                          <div
                            className="d-flex justify-content-between p-2 mb-2"
                            style={{ backgroundColor: "#e1f5fe" }}
                          >
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              Tổng:
                            </MDBTypography>
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              <p>{cart.price}đ</p>
                            </MDBTypography>
                          </div>
                          <MDBBtn block size="lg" style={{ background: "#ff8800" }}>
                            Mua Ngay
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      </div >
    </>
  );
}