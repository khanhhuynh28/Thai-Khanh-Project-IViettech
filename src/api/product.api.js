import { API, BASE_URL } from './constants.api';

export const productAPI = {
    getProductList: (page = 1, limit = 8, filter = {}, textSearch, sort, order) => {
        const paginationString = `_page=${page}&_limit=${limit}`;

        const filterString = Object.keys(filter)
            .map((key) => {
                if (key && key !== '' && filter[key] && filter[key] !== '')
                    return `${key}=${filter[key]}`;
            })
            .join('&'); // neu ko có  key nào thì trả về ''

        const textSearchString = textSearch && textSearch !== '' ? `&q=${textSearch}` : '';

        const sortString = `_sort=${sort}&_order=${order}`;

        const queryString = [
            paginationString,
            ...(textSearchString !== '' ? [textSearchString] : []),
            ...(filterString !== '' ? [filterString] : []),
            ...(sortString !== '' ? [sortString] : []),
        ].join('&');

        return API.get(`${BASE_URL}/products?${queryString}`);
    },
    postProduct: (data) => {
        return API.post(`${BASE_URL}/products`, data);
    },
};
