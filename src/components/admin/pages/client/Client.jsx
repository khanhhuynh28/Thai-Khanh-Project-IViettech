import { useSelector } from "react-redux";
import { LayoutAdmin } from "../../layout/LayoutAdmin";
import "./style.scss"
export function Client() {
  const user = useSelector(state => state.order.order)
  return <div className="container-client">
    <LayoutAdmin content={
      <div>
        <div className='dashboard-content-client'>
          {/* <DashboardHeaderr
          btnText="New Order" /> */}

          <div className='dashboard-content-container'>
            <div className='dashboard-content-header'>
              <h2>Danh sách khách hàng</h2>
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
                <th>TÊN</th>
                <th>GMAIL</th>
                <th>SỐ ĐIỆN THOẠI</th>
                <th>ĐỊA CHỈ</th>
              </thead>

              {user.length !== 0 ?

                <tbody>
                  {user.map((user, index) => (
                    <tr key={index}>
                      <td><span>{user.id}</span></td>
                      <td><span>{user.username}</span></td>
                      <td>
                        <span>{user.email}</span>
                      </td>
                      <td>
                        <span>{user.phone}</span>
                      </td>
                      <td><span>{user.address}</span></td>
                    </tr>
                  ))}
                </tbody>
                : null}
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