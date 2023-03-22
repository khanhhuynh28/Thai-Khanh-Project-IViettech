import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import all_orders from "../../constants/orders";
import { LayoutAdmin } from "../../layout/LayoutAdmin";
import { calculateRange, sliceData } from "../../utils/table-pagination";
import "./style.scss"
export function OrderAdmin() {
  const orders = useSelector(state => state.order.order);
  const a = useSelector(state => console.log(state))

  // const [search, setSearch] = useState('');
  // const [orders, setOrders] = useState();
  // const [page, setPage] = useState(1);
  // const [pagination, setPagination] = useState([]);
  // console.log(orders)
  // useEffect(() => {
  //   setPagination(calculateRange(all_orders, 5));
  //   setOrders(sliceData(all_orders, page, 5));
  // }, []);

  // // Search
  // const __handleSearch = (event) => {
  //   setSearch(event.target.value);
  //   if (event.target.value !== '') {
  //     let search_results = orders.filter((item) =>
  //       item.first_name.toLowerCase().includes(search.toLowerCase()) ||
  //       item.last_name.toLowerCase().includes(search.toLowerCase()) ||
  //       item.product.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setOrders(search_results);
  //   }
  //   else {
  //     __handleChangePage(1);
  //   }
  // };

  // // Change Page 
  // const __handleChangePage = (new_page) => {
  //   setPage(new_page);
  //   setOrders(sliceData(all_orders, new_page, 5));
  // }
  return <div className="container-order-admin">
    <LayoutAdmin content={
      <div className='dashboard-content'>
        {/* <DashboardHeaderr
          btnText="New Order" /> */}

        <div className='dashboard-content-container'>
          <div className='dashboard-content-header'>
            <h2>Danh sách đơn hàng</h2>
            <div className='dashboard-content-search'>
              <input
                type='text'
                // value={search}
                placeholder='Search..'
                className='dashboard-content-input'
              // onChange={e => __handleSearch(e)} 
              />
            </div>
          </div>

          <table>
            <thead>
              <th>Id</th>
              <th>Khách hàng</th>
              <th >Sản phẩm</th>
              <th>Giá tiền</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </thead>

            {/* {orders.length !== 0 ? */}
            {/* <tbody> */}
            {orders.map((order, index) => (
              <>
                <tr key={index}>
                  <td><span>{order.id}</span></td>
                  <td><span>{order.username}</span></td>
                  {order.product.map((product) => (
                    <>
                      <td >
                        {product.items.map((item) => (
                          <>
                            <div className="product-name" key={item}>
                              <span>{item.title}</span>
                            </div>
                          </>
                        ))}
                      </td>
                      <td >
                        {product.items.map((price) => (
                          <>
                            <div className="product-name" key={price}>
                              <span>₫{price.price.toLocaleString()}</span>
                            </div>
                          </>
                        ))}
                      </td>

                      <td><span>₫{product.total.toLocaleString()}</span></td>
                      <td><span>Đã xác nhận</span></td>
                    </>
                  ))}


                </tr>
              </>
            ))}
            {/* </tbody> */}
            {/* : null} */}
          </table>

          {/* {orders.length !== 0 ?? */}
          <div className='dashboard-content-footer'>
            {/* {pagination.map((item, index) => ( */}
            <span
            // key={index}
            // className={item === page ? 'active-pagination' : 'pagination'}
            // onClick={() => __handleChangePage(item)}
            >
              {/* {item} */}
            </span>
            {/* ))} */}
          </div>
          :
          <div className='dashboard-content-footer'>
            <span className='empty-table'>No data</span>
          </div>
          {/* } */}
        </div>
      </div>
    } />
  </div>
}