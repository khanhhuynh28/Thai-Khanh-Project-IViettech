import { API, BASE_URL } from "./constants.api";

export const cartItemAPI = {
  getCartItem: (data) => API.get(`${BASE_URL}/cartItem`, data),
  postCartItem: (data) => API.post(`${BASE_URL}/cartItem`, data),
};