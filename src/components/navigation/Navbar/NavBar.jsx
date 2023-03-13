import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import './navbar.scss';
export function NavBar() {
  const NavBarData = [
    {
      src: 'https://live.staticflickr.com/65535/49932658111_30214a4229_b.jpg',
      title: 'Xe cộ',
      category: 'cars',
    },
    {
      src: 'https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Apps.jpg?p=1',
      title: 'Đồ điện tử',
      category: 'phones',
    },
    {
      src: 'https://blog.dktcdn.net/files/kinh-nghiem-kinh-doanh-danh-cho-shop-thu-cung-online-1.jpg',
      title: 'Thú cưng',
      category: 'pets',
    },
    {
      src: 'https://tuyenquang.dcs.vn/Image/Large/2021106144524_51808.jpg',
      title: 'Thực phẩm',
      category: 'foods',
    },
    {
      src: 'https://giadungsato.com/Uploads/images/giadungsato(2).jpg',
      title: 'Đồ gia dụng',
      category: 'house-ware',
    },
    {
      src: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/10/17/photo1665991016470-16659910166031635359667.jpg',
      title: 'Tủ lạnh, máy giặt',
      category: 'house-ware',
    },
  ];

  const ditpatch = useDispatch();
  const productState = useSelector((state) => state.product);
  let { textSearch, filter } = productState;

  const filterCategory = (key) => {
    ditpatch(
      fetchProductList({
        page: 1,
        limit: 12,
        filter: { ...filter, category: key },
        textSearch,
      })
    );
  };
  return (
    <div className="containerNavBar">
      <div className="navBar">
        <strong>Khám phá danh mục</strong>
        <div className="nav">
          {NavBarData.map((item, index) => {
            return (
              <button
                className="cards"
                key={index}
                onClick={() => filterCategory(item.category)}
              >
                <div className="card car">
                  <img src={item.src} alt="" />
                </div>
                <div className="describe">
                  <p>{item.title}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}