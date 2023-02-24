import { API, BASE_URL } from "./constants.api";

export const productAPI = {
  getProductList: (page,limit) =>
    API.get(`${BASE_URL}/products?_page=${page}&_limit=${limit}`),
    // API.get(`${BASE_URL}/products`),
};
