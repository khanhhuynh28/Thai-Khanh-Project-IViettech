import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { appRoute } from '../../const/routes.const';
import Search from './components/Search';
import logo from '../../assets/images/TK1.png';
import './style.scss';

export function Header() {
    const username = useSelector((state) => state.auth.user);
    return (

        <div className="header-container">
            <div className="header-navbar">
                <div className="container-logo">
                    <div className="logo">
                        <Link to={appRoute.home}>
                            <img src={logo} alt="Chợ Tốt" width={100} height={40} />
                        </Link>
                    </div>
                </div>
                <div className="container-nav">
                    <div className="all-group">
                        <Link to={appRoute.home}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-house"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                            </svg>
                            <span className="nav-group home">Trang chủ</span>
                        </Link>
                    </div>
                    <div className="all-group">

                        <Link to={appRoute.admin}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-kanban"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z" />
                                <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" />
                            </svg>
                            <span className="nav-group management">Quản lý tin</span>
                        </Link>
                    </div>
                    <div className="all-group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-bag-check "
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                        <div className="dropdown all-group">
                            <span className="dropbtn nav-group">Đơn hàng</span>
                            <div className="dropdown-content">
                                <Link to={appRoute.shoppingCart}><span>Giỏ hàng</span></Link>
                                <Link to={appRoute.order}><span>Đơn hàng</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="account-logo all-group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                        </svg>
                        {username ? (
                            <Link to={appRoute.personalPage}>
                                <span className="account nav-group">{username.nickname}</span>
                            </Link>
                        ) : (
                            <Link to={appRoute.login}>
                                <span className="account nav-group">Tài khoản</span>{' '}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="header-search">
                <Search />
                <div className="posts">
                    <button className="post">
                        <Link to={appRoute.post} className="title">
                            ĐĂNG TIN
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    );
}
