import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { fetchProductList } from '../../stores/action/product.action';
import { changePagination } from '../../stores/slice/product.slice';
import Carousel from '../../components/navigation/Carousel/Carousel';
import { NavBar } from '../../components/navigation/Navbar/NavBar';
import './style.scss';

import Product from '../../components/Product/Product';
import Sort from '../../components/Product/Sort/Sort';
export function Home() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.product);
    const productPagination = useSelector((state) => state.product.pagination);

    useEffect(() => {
        dispatch(fetchProductList({ page: 1, limit: 12 }));
    }, []);
    return (
        <div className="container-home">
            <div className="home">
                <Carousel />
                <NavBar />
                <div className="container-product">
                    <div className="newsfeed-sort">
                        <p className="newsfeed">Tin mới đăng</p>
                        <div>
                            <Sort />
                        </div>
                    </div>

                    <div className="product">
                        {productList.map((item) => (
                            <>
                                <div className="product-item">
                                    <Product
                                        key={item.id}
                                        id={item.id}
                                        srcImage={item.srcImage}
                                        title={item.title}
                                        price={item.price}
                                        status={item.status}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
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
