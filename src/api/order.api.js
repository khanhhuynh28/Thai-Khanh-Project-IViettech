import { API, BASE_URL } from "./constants.api";

export const orderAPI = {
  getOrderApi: (data) => API.get(`${BASE_URL}/cart`, data),
  postOrder: (data) => API.post(`${BASE_URL}/cart`, data),
};