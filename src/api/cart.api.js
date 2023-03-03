import { API, BASE_URL } from "./constants.api";

export const cartAPI = {
  getCartAPI: (data) => API.get(`${BASE_URL}/cart`, data),
};