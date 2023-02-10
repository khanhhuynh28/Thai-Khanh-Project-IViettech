import "./style/navbar.scss";
export function NavBar() {
  return <div className="containerNavBar">
    <div className="navBar">
      <strong>Khám phá danh mục</strong>
      <div className="nav">
        <button className="cards">
          <div className="card car"></div>
          <p> Xe cộ</p>
        </button>
        <button className="cards">
          <div className="card electronic"></div>
          <p>Đồ điện tử</p>
        </button>
        <button className="cards">
          <div className="card pet"></div>
          <p>Thú cưng</p>
        </button>
        <button className="cards">
          <div className="card food"></div>
          <p>Thực phẩm</p>
        </button>
        <button className="cards">
          <div className="card houseware"></div>
          <p>Đồ gia dụng</p>
        </button>
        <button className="cards">
          <div className="card fridge"></div>
          <p>Tủ lạnh, máy giặt</p>
        </button>
      </div>
    </div>
  </div>
}