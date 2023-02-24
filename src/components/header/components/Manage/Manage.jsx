import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap/dist/react-bootstrap";
import "./style.scss";
export default function Manage() {
  return (
    <div className="container-manage">
      <div className="manage">
        <div className="title"><strong>Quản lý tin đăng</strong></div>
        <div className="my-self">
          <div className="advertisement"></div>
          <div className="personally">
            <div className="avatar"></div>
            <div className="username">
              <p className="name">My self</p>
              <div className="link">
                <button className="personal-page">Trang cá nhân</button>
                <button className="wallet-link">Liên kết ví bán hàng</button>
              </div>
            </div>
          </div>
        </div>

        {/* <Navbar >
          <Container>
            <Nav className="me-auto navbar">
              <Nav.Link className="nav" href="#">BỊ TỪ CHỐI</Nav.Link>
              <Nav.Link className="nav" href="#">HẾT HẠN</Nav.Link>
              <Nav.Link className="nav" href="#">ĐANG HIỂN THỊ</Nav.Link>
              <Nav.Link className="nav" href="#">CẦN THANH TOÁN</Nav.Link>
              <Nav.Link className="nav" href="#">TIN NHÁP</Nav.Link>
              <Nav.Link className="nav" href="#">KHÁC</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}


        <div className="todoList">
          <p>chưa có thông tin</p>
        </div>
      </div>
    </div>
  )
}