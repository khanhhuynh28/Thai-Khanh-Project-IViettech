import { Link } from "react-router-dom";
import { appRoute } from "../../../const/routes.const";
import "./style.scss";
export function SideBar() {
  return <div className="container-side-bar">
    <div className="side-bar">
      <div className="overview navigate">
        <Link to={appRoute.overview}>Tổng quan</Link>
      </div>
      <div className="client navigate">
        <Link to={appRoute.client}>Khách hàng</Link>
      </div>
      <div className="orderAdmin navigate">
        <Link to={appRoute.orderAdmin}>Đơn hàng</Link>
      </div>
      <div className="productList navigate">
        <Link to={appRoute.productList}>Sản phẩm</Link>
      </div>


    </div>
  </div>
}
// import { Button, Drawer, Space } from 'antd';
// import { useState } from 'react';
// const App = () => {
//   const [open, setOpen] = useState(false);
//   const [size, setSize] = useState();
//   const showDefaultDrawer = () => {
//     setSize('default');
//     setOpen(true);
//   };
//   const showLargeDrawer = () => {
//     setSize('large');
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Space>
//         <Button type="primary" onClick={showDefaultDrawer}>
//           Open Default Size (378px)
//         </Button>
//         <Button type="primary" onClick={showLargeDrawer}>
//           Open Large Size (736px)
//         </Button>
//       </Space>
//       <Drawer
//         title={`${size} Drawer`}
//         placement="right"
//         size={size}
//         onClose={onClose}
//         open={open}
//         extra={
//           <Space>
//             <Button onClick={onClose}>Cancel</Button>
//             <Button type="primary" onClick={onClose}>
//               OK
//             </Button>
//           </Space>
//         }
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     </>
//   );
// };
// export default App;
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import "./style.scss"
// // import logo from '../../assets/images/white-logo.png';
// // import LogoutIcon from '../../assets/icons/logout.svg';
// import SideBarItem from './SideBarItem';

// export function SideBar({ menu }) {
//   const location = useLocation();

//   const [active, setActive] = useState(1);

//   useEffect(() => {
//     menu.forEach(element => {
//       if (location.pathname === element.path) {
//         setActive(element.id);
//       }
//     });
//   }, [location.pathname])

//   const __navigate = (id) => {
//     setActive(id);
//   }

//   return (
//     <nav className='sidebar'>
//       <div className='sidebar-container'>
//         {/* <div className='sidebar-logo-container'>
//           <img
//             src={logo}
//             alt="logo" />
//         </div> */}

//         <div className='sidebar-container'>
//           <div className='sidebar-items'>
//             {menu.map((item, index) => (
//               <div key={index} onClick={() => __navigate(item.id)}>
//                 <SideBarItem
//                   active={item.id === active}
//                   item={item} />
//               </div>
//             ))}
//           </div>

//           <div className='sidebar-footer'>
//             <span className='sidebar-item-label'>Logout</span>
//             <img
//               // src={LogoutIcon}
//               alt='icon-logout'
//               className='sidebar-item-icon' />
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

