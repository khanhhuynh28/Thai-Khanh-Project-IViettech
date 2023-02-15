import "./style.scss";
export function PersonalPage() {
  return (
    <div className="container-personal-page">
      <div className="personal-page">
        <div className="personally">
          <div className="personally-left">
            <div className="avatar"></div>
            <div className="nickname">
              <strong className="name">My self</strong>
              <div className="follow">
                <a className="followers" href="">Người theo dõi</a>
                <a className="watching" href="">Đang theo dõi</a>
              </div>
              <div className="links">
                <button className="edit-page">Chỉnh sửa trang cá nhân</button>
                <button className="link">Liên kết</button>
              </div>
            </div>
          </div>
          <div className="personally-right">
            <p>Đánh giá:<span></span></p>
            <p>Ngày tham gia:<span></span></p>
            <p>Địa chỉ:<span></span></p>
            <p>Phản hồi chat:<span></span></p>
            <p>Đã cung cấp:<span></span></p>
          </div>
        </div>
        <div className="new-post">
          <strong>Tin đang đăng</strong>
        </div>
        <div className="job-application">
          <strong>Hồ sơ xin việc</strong>
        </div>
      </div>
    </div>
  )
}