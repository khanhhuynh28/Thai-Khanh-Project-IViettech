import { API, BASE_URL } from "./constants.api";

export const cartItemAPI = {
  postCartItem: (data) => API.post(`${BASE_URL}/cartItem`, data),
};