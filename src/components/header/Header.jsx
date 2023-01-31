import "./style.scss";
export function Header() {
    return <div className="header-container">
        <div className="header-navbar">
            <div className="container-logo">
                <div className="logo"></div>
            </div>
            <div className="container-nav">
                <a className="nav-group home">Trang chủ
                    <img src="" alt="" />
                </a>
                <a className="nav-group management">Quản lý tin</a>
                <a className="nav-group order">Đơn hàng</a>
                <a className="nav-group chat">Chat</a>
                <a className="nav-group notification">Thông báo</a>
                <a className="nav-group see-more">Xem thêm</a>
            </div>
        </div>
        <div className="header-search">
            <div className="search"></div>
            <div className="account"></div>
            <div className="post"></div>
        </div>
    </div>
}