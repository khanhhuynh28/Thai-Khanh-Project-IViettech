import { API, BASE_URL } from './constants.api';

// const object = {
//     _sort: 'price',
//     _order: 'asc',
//     category: 'pest',
// };

// object['abc'];

// const keys = ['sort', '_order', 'category'];

// object['_sort'];

export const productAPI = {
    //     getProductList: (page = 1, limit = 12, filter = {}, textSearch) => {
    //         const paginationString = `_page=${page}&_limit=${limit}`;

    //         const filterString = Object.keys(filter)
    //             .map((key) => {
    //                 if (key && key !== '' && filter[key] && filter[key] !== '')
    //                     return `${key}=${filter[key]}`;
    //             })
    //             .join('&'); // neu ko có  key nào thì trả về ''

    //         const textSearchString = textSearch && textSearch !== '' ? `q=${textSearch}` : '';

    //         const queryString = [
    //             paginationString,
    //             ...(textSearchString !== '' ? [textSearchString] : []),
    //             ...(filterString !== '' ? [filterString] : []),
    //         ].join('&');

    //         return API.get(`${BASE_URL}/api/products?${queryString}`);
    //     },

    getProductList: (page, limit) => API.get(`${BASE_URL}/products?_page=${page}&_limit=${limit}`),
};
