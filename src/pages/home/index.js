import Product from '../../components/Product/Product';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { fetchProductList } from '../../stores/action/product.action';
import { changePagination, filterCategory } from '../../stores/slice/product.slice';
import './style.scss';
import Carousel from '../../components/navigation/Carousel/Carousel';
import { NavBar } from '../../components/navigation/Navbar/NavBar';
export function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product);
  const productPagination = useSelector((state) => state.product.pagination);

  useEffect(() => {
    dispatch(fetchProductList({ page: 1, limit: 8 }));
  }, []);
  return (
    <div className="container-home">
      <div className="home">
        <Carousel />
        <NavBar />
        {/* <Shop /> */}
        {/* <Manage /> */}
        {/* <PersonalPage /> */}
        <div className="container-product">
          <p className="newsfeed">Tin mới đăng</p>
          <Product />
        </div>
        <Pagination
          onChange={(page, pageSize) => {
            dispatch(fetchProductList({ page: page, limit: pageSize }));
            dispatch(changePagination({ page, limit: pageSize }));
          }}
          current={Number(productPagination.page)}
          total={Number(productPagination.total)}
          pageSize={Number(productPagination.limit)}
        />
      </div>
    </div>
  );
}
