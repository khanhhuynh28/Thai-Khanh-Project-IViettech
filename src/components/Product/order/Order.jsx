import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import "./style.scss"
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";

export function Order() {
  const order = useSelector(state => state.order.order);
  const userId = useSelector(state => state.auth.user);

  return (
    <>
      {userId ? (
        <div className="container-order">
          {order.length === 0 ? (
            <div className="no-orders">
              <p className="title">Bạn chưa có đơn hàng nào!</p>
              <div className="buy">
                <Link to={appRoute.home}><button >Mua Ngay</button></Link>
              </div>
            </div>
          ) : (
            <div className="order">
              <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="8" xl="6">
                      <MDBCard className="border-top border-bottom border-3 border-color-custom">
                        <MDBCardBody className="p-5">
                          <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                            Biên lai mua hàng
                          </p>
                          {order.map((item) => (
                            <>
                              <MDBRow key={item}>
                                <MDBCol className="mb-3">
                                  <p className="small text-muted mb-1">Họ tên</p>
                                  <p>{item.username}</p>
                                </MDBCol>
                                <MDBCol className="mb-3">
                                  <p className="small text-muted mb-1">Địa chỉ</p>
                                  <p>{item.address}</p>
                                </MDBCol>
                              </MDBRow>
                              {item.product.map((i) => (
                                <div key={i}>
                                  {i.items.map((p) => (
                                    <div key={p}
                                      className="mx-n5 px-5 py-4"
                                      style={{ backgroundColor: "#f2f2f2" }}
                                    >
                                      <MDBRow>
                                        <MDBCol md="8" lg="9">
                                          <p>{p.title}</p>
                                        </MDBCol>
                                        <MDBCol md="4" lg="3">
                                          <p>₫{p.price.toLocaleString()}</p>
                                        </MDBCol>
                                      </MDBRow>
                                    </div>
                                  ))}
                                </div>
                              ))}

                            </>
                          ))}
                          <MDBRow className="my-4">
                            <MDBCol md="8" lg="8">
                              <p className="mb-0">Phí vận chuyển</p>
                            </MDBCol>
                            <MDBCol md="4" lg="4">
                              <p className="mb-0">₫35.000</p>
                            </MDBCol>

                            {order.map((o) => (
                              <div key={o} className="total">
                                <MDBCol className="title-total">
                                  <p className="mb-0 ">Tổng</p>
                                </MDBCol>
                                {o.product.map((y) => (
                                  <MDBCol className="num" key={y} style={{ fontSize: "18px", color: "red" }}>
                                    <p className="mb-0 ">₫{y.totalPayment.toLocaleString()}</p>
                                  </MDBCol>
                                ))}
                              </div>
                            ))}
                          </MDBRow>
                          <p
                            className="lead fw-bold mb-4 pb-2"
                            style={{ color: "#f37a27" }}
                          >
                            Theo dõi đơn hàng
                          </p>
                          <MDBRow>
                            <MDBCol lg="12">
                              <div className="horizontal-timeline">
                                <ul className="list-inline items d-flex justify-content-between">
                                  <li className="list-inline-item items-list">
                                    <p
                                      className="py-1 px-2 rounded text-white"
                                      style={{ backgroundColor: "#f37a27" }}
                                    >
                                      Đặt hàng
                                    </p>
                                  </li>
                                  <li className="list-inline-item items-list">
                                    <p
                                      className="py-1 px-2 rounded text-white"
                                      style={{ backgroundColor: "#f37a27" }}
                                    >
                                      Vận chuyển
                                    </p>
                                  </li>
                                  <li className="list-inline-item items-list">
                                    <p
                                      className="py-1 px-2 rounded text-white"
                                      style={{ backgroundColor: "#f37a27" }}
                                    >
                                      Trên đường
                                    </p>
                                  </li>
                                  <li
                                    className="list-inline-item items-list text-end"
                                    style={{ marginRight: "-8px" }}
                                  >
                                    <p style={{ marginRight: "-8px" }}>Đã giao hàng</p>
                                  </li>
                                </ul>
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <p className="mt-4 pt-2 mb-0">
                            Bạn cần hỗ trợ?{" "}
                            <a href="#!" style={{ color: "#f37a27" }}>
                              Xin vui lòng liên hệ với chúng tôi
                            </a>
                          </p>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
            </div>
          )}

        </div>

      ) : <Navigate to={appRoute.login} />
      }

    </>
  );
}