import { LayoutAdmin } from "../../layout/LayoutAdmin";
import "./style.scss"
export function ProductList() {
  return <div className="container-product-list">
    <LayoutAdmin content={
      <div>
        <div className='dashboard-content'>
          {/* <DashboardHeaderr
          btnText="New Order" /> */}

          <div className='dashboard-content-container'>
            <div className='dashboard-content-header'>
              <h2>Orders List</h2>
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
                <th>ID</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>COSTUMER</th>
                <th>PRODUCT</th>
                <th>REVENUE</th>
              </thead>

              {/* {orders.length !== 0 ? */}
              {/* <tbody> */}
              {/* {orders.map((order, index) => ( */}
              <tr >
                <td><span></span></td>
                <td><span></span></td>
                <td>
                  <div>
                    {/* {order.status === 'Paid' ?
                      <img
                        // src={DoneIcon}
                        alt='paid-icon'
                        className='dashboard-content-icon' />
                      : order.status === 'Canceled' ?
                        <img
                          // src={CancelIcon}
                          alt='canceled-icon'
                          className='dashboard-content-icon' />
                        : order.status === 'Refunded' ?
                          <img
                            // src={RefundedIcon}
                            alt='refunded-icon'
                            className='dashboard-content-icon' />
                          : null} */}
                    <span></span>
                  </div>
                </td>
                <td>
                  <div>
                    <img
                      src=""
                      className='dashboard-content-avatar'
                      alt="" />
                    <span></span>
                  </div>
                </td>
                <td><span></span></td>
                <td><span>$</span></td>
              </tr>
              {/* ))} */}
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
      </div>
    } />
  </div>
}