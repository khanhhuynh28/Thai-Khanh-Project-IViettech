import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import './style.scss';

function Sort() {
    const [valueSort, setValueSort] = useState('');
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product);
    const { filter, textSearch } = productList;
    useEffect(() => {
        dispatch(
            fetchProductList({
                page: 1,
                limit: 12,
                filter,
                textSearch,
                sort: 'price',
                order: valueSort,
            })
        );
    }, [valueSort]);

    return (
        <div className="sort-item">
            <label htmlFor="sort"> Sắp xếp theo Giá </label>
            <select
                name="sort"
                id="sort"
                defaultValue={null}
                onChange={(e) => setValueSort(e.target.value)}
            >
                <option value="">Mặc định</option>
                <option value="asc">Giá Tăng Dần</option>
                <option value="desc">Giá Giảm Dần</option>
            </select>
        </div>
    );
}

export default Sort;
