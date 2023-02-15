import "./style/navbar.scss";
export function NavBar() {
  return <div className="containerNavBar">
    <div className="navBar">
      <strong>Khám phá danh mục</strong>
      <div className="nav">
        <button className="cards">
          <div className="card car">
            <img src="https://live.staticflickr.com/65535/49932658111_30214a4229_b.jpg" alt="" />
          </div>
          <p> Xe cộ</p>
        </button>
        <button className="cards">
          <div className="card electronic">
            <img src="https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Apps.jpg?p=1" alt="" />
          </div>
          <p>Đồ điện tử</p>
        </button>
        <button className="cards">
          <div className="card pet">
            <img src="https://blog.dktcdn.net/files/kinh-nghiem-kinh-doanh-danh-cho-shop-thu-cung-online-1.jpg" alt="" />
          </div>
          <p>Thú cưng</p>
        </button>
        <button className="cards">
          <div className="card food">
            <img src="https://tuyenquang.dcs.vn/Image/Large/2021106144524_51808.jpg" alt="" />
          </div>
          <p>Thực phẩm</p>
        </button>
        <button className="cards">
          <div className="card houseware">
            <img src="https://giadungsato.com/Uploads/images/giadungsato(2).jpg" alt="" />
          </div>
          <p>Đồ gia dụng</p>
        </button>
        <button className="cards">
          <div className="card fridge">
            <img src="https://cafefcdn.com/thumb_w/650/203337114487263232/2022/10/17/photo1665991016470-16659910166031635359667.jpg" alt="" />
          </div>
          <p>Tủ lạnh, máy giặt</p>
        </button>
      </div>
    </div>
  </div>
}